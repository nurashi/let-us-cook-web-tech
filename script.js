// Chat page functionality
(function() {
    'use strict';

    // Check authentication
    checkPageAuth();

    const API_URL = '/api';
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    let isFirstMessage = true;

    function addMessage(content, type = 'user') {
        if (isFirstMessage) {
            chatMessages.innerHTML = '';
            isFirstMessage = false;
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'user' ? '👤' : '🤖';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant';
        typingDiv.id = 'typingIndicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = '🤖';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        
        contentDiv.appendChild(indicator);
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(contentDiv);
        chatMessages.appendChild(typingDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async function sendMessage(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, 'user');
        
        // Clear input
        chatInput.value = '';
        
        // Disable input while processing
        chatInput.disabled = true;
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending...';
        
        // Show typing indicator
        showTypingIndicator();

        try {
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            removeTypingIndicator();

            if (response.ok && data.success) {
                addMessage(data.reply, 'assistant');
            } else {
                addMessage(`Sorry, I encountered an error: ${data.message}`, 'assistant');
            }
        } catch (error) {
            console.error('Chat error:', error);
            removeTypingIndicator();
            addMessage('Sorry, I could not connect to the server. Please try again.', 'assistant');
        } finally {
            // Re-enable input
            chatInput.disabled = false;
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send';
            chatInput.focus();
        }
    }

    function sendSuggestion(text) {
        chatInput.value = text;
        sendMessage(text);
    }

    // Make sendSuggestion available globally for onclick handlers
    window.sendSuggestion = sendSuggestion;

    // Event listeners
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            sendMessage(message);
        });
    }

    // Focus input on load
    if (chatInput) {
        chatInput.focus();
    }
})();
