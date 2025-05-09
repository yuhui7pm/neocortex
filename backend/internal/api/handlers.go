package api

import (
	"net/http"
	
	"github.com/gin-gonic/gin"
)

// Example represents a sample data structure
type Example struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

// healthHandler returns the health status of the API
func (s *Server) healthHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status": "healthy",
	})
}

// getExamplesHandler returns a list of examples
func (s *Server) getExamplesHandler(c *gin.Context) {
	examples := []Example{
		{ID: "1", Name: "Example 1"},
		{ID: "2", Name: "Example 2"},
	}
	
	c.JSON(http.StatusOK, examples)
}

// createExampleHandler creates a new example
func (s *Server) createExampleHandler(c *gin.Context) {
	var example Example
	if err := c.ShouldBindJSON(&example); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	// In a real application, save to database and generate ID
	example.ID = "3" // Just for demonstration
	
	c.JSON(http.StatusCreated, example)
}

// getExampleByIDHandler retrieves an example by ID
func (s *Server) getExampleByIDHandler(c *gin.Context) {
	id := c.Param("id")
	
	// In a real application, retrieve from database
	// This is just for demonstration
	if id == "1" {
		c.JSON(http.StatusOK, Example{ID: "1", Name: "Example 1"})
		return
	} else if id == "2" {
		c.JSON(http.StatusOK, Example{ID: "2", Name: "Example 2"})
		return
	}
	
	c.JSON(http.StatusNotFound, gin.H{"error": "Example not found"})
} 