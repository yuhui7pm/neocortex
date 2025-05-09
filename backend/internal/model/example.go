package model

// Example represents a sample data model
type Example struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	CreatedAt   string `json:"created_at"`
}

// ExampleRequest represents the incoming request for creating/updating an example
type ExampleRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
} 