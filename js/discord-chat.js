document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    function addMessage(author, content, timestamp) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.innerHTML = `
            <span class="message-author">${author}</span>
            <span class="message-content">${content}</span>
            <span class="message-timestamp">${new Date(timestamp).toLocaleTimeString()}</span>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            try {
                const response = await fetch('http://localhost:3000/api/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                });
                if (response.ok) {
                    addMessage('You', message, new Date());
                    chatInput.value = '';
                } else {
                    console.error('Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    async function fetchMessages() {
        try {
            const response = await fetch('http://localhost:3000/api/get-messages');
            if (response.ok) {
                const messages = await response.json();
                chatMessages.innerHTML = ''; // Clear existing messages
                messages.reverse().forEach(msg => addMessage(msg.author, msg.content, msg.timestamp));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Fetch messages every 5 seconds
    setInterval(fetchMessages, 5000);
    // Initial fetch
    fetchMessages();
});