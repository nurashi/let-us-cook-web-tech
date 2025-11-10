package routes

import (
	"github.com/gorilla/mux"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/handler"
)

// SetupRoutes configures all routes for the application
func SetupRoutes(userHandler *handler.UserHandler, chatHandler *handler.ChatHandler) *mux.Router {
	router := mux.NewRouter()

	// API routes
	api := router.PathPrefix("/api").Subrouter()

	// Health check
	api.HandleFunc("/health", userHandler.HealthCheck).Methods("GET")

	// Authentication routes
	api.HandleFunc("/signup", userHandler.Signup).Methods("POST")
	api.HandleFunc("/login", userHandler.Login).Methods("POST")

	// User routes
	api.HandleFunc("/users", userHandler.GetAllUsers).Methods("GET")
	api.HandleFunc("/users/{id}", userHandler.GetUser).Methods("GET")
	api.HandleFunc("/users/{id}", userHandler.DeleteUser).Methods("DELETE")

	// Chat routes
	api.HandleFunc("/chat", chatHandler.Chat).Methods("POST")

	return router
}
