package handler

import (
	"context"
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/models"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/repository"
)

// UserHandler handles HTTP requests for user operations
type UserHandler struct {
	repo *repository.UserRepository
}

// NewUserHandler creates a new user handler
func NewUserHandler(repo *repository.UserRepository) *UserHandler {
	return &UserHandler{repo: repo}
}

// HealthCheck handles health check requests
func (h *UserHandler) HealthCheck(w http.ResponseWriter, r *http.Request) {
	response := models.Response{
		Success: true,
		Message: "Server is running",
		Data: map[string]interface{}{
			"status": "ok",
		},
	}
	respondJSON(w, http.StatusOK, response)
}

// Signup handles user registration
func (h *UserHandler) Signup(w http.ResponseWriter, r *http.Request) {
	var req models.SignupRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	// Validation
	if req.Name == "" || req.Email == "" || req.Password == "" {
		respondError(w, http.StatusBadRequest, "Name, email, and password are required")
		return
	}

	ctx := context.Background()
	user, err := h.repo.CreateUser(ctx, req)
	if err != nil {
		if errors.Is(err, repository.ErrDuplicateEmail) {
			respondError(w, http.StatusConflict, "User with this email already exists")
			return
		}
		log.Printf("Error creating user: %v", err)
		respondError(w, http.StatusInternalServerError, "Server error during signup")
		return
	}

	response := models.Response{
		Success: true,
		Message: "User created successfully",
		Data: map[string]interface{}{
			"user": user.ToUserResponse(),
		},
	}
	respondJSON(w, http.StatusCreated, response)
}

// Login handles user authentication
func (h *UserHandler) Login(w http.ResponseWriter, r *http.Request) {
	var req models.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	// Validation
	if req.Email == "" || req.Password == "" {
		respondError(w, http.StatusBadRequest, "Email and password are required")
		return
	}

	ctx := context.Background()
	user, err := h.repo.AuthenticateUser(ctx, req.Email, req.Password)
	if err != nil {
		if errors.Is(err, repository.ErrInvalidCredentials) {
			respondError(w, http.StatusUnauthorized, "Invalid email or password")
			return
		}
		log.Printf("Error authenticating user: %v", err)
		respondError(w, http.StatusInternalServerError, "Server error during login")
		return
	}

	response := models.Response{
		Success: true,
		Message: "Login successful",
		Data: map[string]interface{}{
			"user": user.ToUserResponse(),
		},
	}
	respondJSON(w, http.StatusOK, response)
}

// GetUser handles retrieving a user by ID
func (h *UserHandler) GetUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	idStr := vars["id"]

	id, err := strconv.Atoi(idStr)
	if err != nil {
		respondError(w, http.StatusBadRequest, "Invalid user ID")
		return
	}

	ctx := context.Background()
	user, err := h.repo.GetUserByID(ctx, id)
	if err != nil {
		if errors.Is(err, repository.ErrUserNotFound) {
			respondError(w, http.StatusNotFound, "User not found")
			return
		}
		log.Printf("Error getting user: %v", err)
		respondError(w, http.StatusInternalServerError, "Server error")
		return
	}

	response := models.Response{
		Success: true,
		Data: map[string]interface{}{
			"user": user.ToUserResponse(),
		},
	}
	respondJSON(w, http.StatusOK, response)
}

// GetAllUsers handles retrieving all users
func (h *UserHandler) GetAllUsers(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	users, err := h.repo.GetAllUsers(ctx)
	if err != nil {
		log.Printf("Error getting users: %v", err)
		respondError(w, http.StatusInternalServerError, "Server error")
		return
	}

	userResponses := make([]models.UserResponse, len(users))
	for i, user := range users {
		userResponses[i] = user.ToUserResponse()
	}

	response := models.Response{
		Success: true,
		Data: map[string]interface{}{
			"count": len(users),
			"users": userResponses,
		},
	}
	respondJSON(w, http.StatusOK, response)
}

// DeleteUser handles deleting a user
func (h *UserHandler) DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	idStr := vars["id"]

	id, err := strconv.Atoi(idStr)
	if err != nil {
		respondError(w, http.StatusBadRequest, "Invalid user ID")
		return
	}

	ctx := context.Background()
	err = h.repo.DeleteUser(ctx, id)
	if err != nil {
		if errors.Is(err, repository.ErrUserNotFound) {
			respondError(w, http.StatusNotFound, "User not found")
			return
		}
		log.Printf("Error deleting user: %v", err)
		respondError(w, http.StatusInternalServerError, "Server error")
		return
	}

	response := models.Response{
		Success: true,
		Message: "User deleted successfully",
	}
	respondJSON(w, http.StatusOK, response)
}

// Helper functions

func respondJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}

func respondError(w http.ResponseWriter, status int, message string) {
	response := models.Response{
		Success: false,
		Message: message,
	}
	respondJSON(w, status, response)
}
