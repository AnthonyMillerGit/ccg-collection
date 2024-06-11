package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("my_secret_key")
var users = make(map[string]Credentials)

type Credentials struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

type Card struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Image string `json:"image"`
}

func main() {
	router := mux.NewRouter()

	// Authentication routes
	router.HandleFunc("/api/signup", SignUp).Methods("POST")
	router.HandleFunc("/api/login", Login).Methods("POST")
	router.HandleFunc("/api/profile", Profile).Methods("GET")

	// Card data routes
	router.HandleFunc("/api/cards/{game}", getCards).Methods("GET")

	log.Println("Server running on port 8000")
	log.Fatal(http.ListenAndServe(":8000", router))
}

// SignUp handles user registration
func SignUp(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(creds.Password), bcrypt.DefaultCost)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	creds.Password = string(hashedPassword)
	users[creds.Email] = creds

	w.WriteHeader(http.StatusCreated)
}

// Login handles user login
func Login(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	storedUser, ok := users[creds.Email]
	if !ok {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(creds.Password)); err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	expirationTime := time.Now().Add(5 * time.Minute)
	claims := &Claims{
		Email: creds.Email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})
}

// Profile handles user profile retrieval
func Profile(w http.ResponseWriter, r *http.Request) {
	c, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	tokenStr := c.Value
	claims := &Claims{}

	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})
	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if !tkn.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	storedUser, ok := users[claims.Email]
	if !ok {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	profile := map[string]string{
		"username": storedUser.Username,
		"email":    claims.Email,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(profile)
}

// getCards handles card data retrieval
func getCards(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	game := vars["game"]

	// Dummy data for testing
	cards := []Card{
		{ID: 1, Name: "Card 1", Image: "http://example.com/card1.png"},
		{ID: 2, Name: "Card 2", Image: "http://example.com/card2.png"},
		{ID: 3, Name: "Card 3", Image: "http://example.com/card3.png"},
	}

	response := map[string]interface{}{
		"game":  game,
		"cards": cards,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
