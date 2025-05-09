package main

import (
	"log"
	
	"github.com/yuhui7pm/neocortex/backend/internal/api"
	"github.com/yuhui7pm/neocortex/backend/internal/config"
)

func main() {
	cfg := config.LoadConfig()
	
	// Initialize API server
	server := api.NewServer(cfg)
	
	// Start the server
	log.Printf("Starting server on %s\n", cfg.ServerAddress)
	if err := server.Start(); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
} 