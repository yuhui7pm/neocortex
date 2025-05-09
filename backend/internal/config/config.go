package config

import (
	"os"
)

// Config holds all configuration for the application
type Config struct {
	ServerAddress string
	Environment   string
}

// LoadConfig loads configuration from environment variables with defaults
func LoadConfig() *Config {
	serverAddr := os.Getenv("SERVER_ADDR")
	if serverAddr == "" {
		serverAddr = ":8080"
	}

	env := os.Getenv("ENVIRONMENT")
	if env == "" {
		env = "development"
	}

	return &Config{
		ServerAddress: serverAddr,
		Environment:   env,
	}
} 