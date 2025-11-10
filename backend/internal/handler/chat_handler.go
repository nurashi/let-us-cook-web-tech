package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type ChatHandler struct {
	apiKey string
}

func NewChatHandler() *ChatHandler {
	return &ChatHandler{
		apiKey: os.Getenv("OPENAI_API_KEY"),
	}
}

type ChatRequest struct {
	Message string `json:"message"`
}

type ChatResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Reply   string `json:"reply,omitempty"`
}

type OpenAIRequest struct {
	Model    string    `json:"model"`
	Messages []Message `json:"messages"`
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type OpenAIResponse struct {
	Choices []Choice `json:"choices"`
	Error   *struct {
		Message string `json:"message"`
	} `json:"error,omitempty"`
}

type Choice struct {
	Message Message `json:"message"`
}

func (h *ChatHandler) Chat(w http.ResponseWriter, r *http.Request) {
	var req ChatRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondJSON(w, http.StatusBadRequest, ChatResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	if req.Message == "" {
		respondJSON(w, http.StatusBadRequest, ChatResponse{
			Success: false,
			Message: "Message is required",
		})
		return
	}

	if h.apiKey == "" {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "OpenAI API key not configured",
		})
		return
	}

	// Create OpenAI request with cooking-focused system message
	openAIReq := OpenAIRequest{
		Model: "gpt-3.5-turbo",
		Messages: []Message{
			{
				Role:    "system",
				Content: "You are a helpful cooking assistant for 'Let Us Cook' restaurant. Help users with recipes, cooking tips, ingredient substitutions, and culinary advice. Keep responses concise and friendly.",
			},
			{
				Role:    "user",
				Content: req.Message,
			},
		},
	}

	jsonData, err := json.Marshal(openAIReq)
	if err != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "Failed to prepare request",
		})
		return
	}

	// Call OpenAI API
	client := &http.Client{}
	openAIURL := "https://api.openai.com/v1/chat/completions"

	httpReq, err := http.NewRequest("POST", openAIURL, bytes.NewBuffer(jsonData))
	if err != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "Failed to create request",
		})
		return
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", fmt.Sprintf("Bearer %s", h.apiKey))

	resp, err := client.Do(httpReq)
	if err != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "Failed to connect to OpenAI",
		})
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "Failed to read response",
		})
		return
	}

	var openAIResp OpenAIResponse
	if err := json.Unmarshal(body, &openAIResp); err != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "Failed to parse response",
		})
		return
	}

	if openAIResp.Error != nil {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: fmt.Sprintf("OpenAI error: %s", openAIResp.Error.Message),
		})
		return
	}

	if len(openAIResp.Choices) == 0 {
		respondJSON(w, http.StatusInternalServerError, ChatResponse{
			Success: false,
			Message: "No response from OpenAI",
		})
		return
	}

	respondJSON(w, http.StatusOK, ChatResponse{
		Success: true,
		Message: "Chat response generated",
		Reply:   openAIResp.Choices[0].Message.Content,
	})
}
