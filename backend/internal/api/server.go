package api

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	
	"github.com/yuhui7pm/neocortex/backend/internal/config"
)

// Server represents the HTTP server
type Server struct {
	router *gin.Engine
	config *config.Config
}

// NewServer creates a new server instance
func NewServer(cfg *config.Config) *Server {
	// Set Gin mode based on environment
	if cfg.Environment == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	router := gin.Default()
	
	// Configure CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	server := &Server{
		router: router,
		config: cfg,
	}
	
	// Register routes
	server.registerRoutes()
	
	return server
}

// Start begins listening on the configured address
func (s *Server) Start() error {
	return s.router.Run(s.config.ServerAddress)
}

// registerRoutes sets up all API routes
func (s *Server) registerRoutes() {
	// API v1 routes
	v1 := s.router.Group("/api/v1")
	{
		// Health check
		v1.GET("/health", s.healthHandler)
		
		// Example routes
		v1.GET("/examples", s.getExamplesHandler)
		v1.POST("/examples", s.createExampleHandler)
		v1.GET("/examples/:id", s.getExampleByIDHandler)
	}
} 