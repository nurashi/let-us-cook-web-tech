package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/rs/cors"

	"github.com/nurashi/let-us-cook-web-tech/backend/internal/config"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/handler"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/repository"
	"github.com/nurashi/let-us-cook-web-tech/backend/internal/routes"
)

func main() {
	ctx := context.Background()

	// Load configuration
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	// Create connection pool
	pool, err := cfg.CreatePool(ctx)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer pool.Close()

	log.Println("✅ Connected to PostgreSQL database")

	// Initialize repository
	userRepo := repository.NewUserRepository(pool)

	// Initialize handler
	userHandler := handler.NewUserHandler(userRepo)

	// Setup routes
	router := routes.SetupRoutes(userHandler)

	// Setup CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow all origins for development
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})

	// Start server
	addr := cfg.GetServerAddress()
	log.Printf("🚀 Server running on http://%s", addr)
	log.Printf("📊 API Health: http://%s/api/health", addr)

	srv := &http.Server{
		Addr:         addr,
		Handler:      corsHandler.Handler(router),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	if err := srv.ListenAndServe(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
