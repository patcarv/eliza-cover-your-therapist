const chatContainer = document.getElementById('chat');
const userInputForm = document.getElementById('user-input-form');
const userInput = document.getElementById('user-input');
const responseArea = document.getElementById('response-area'); // Add this line


userInputForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('You', userMessage);
    userInput.value = '';

    fetchResponse(userMessage);
});

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to display Eliza's response in the response area
function displayElizaResponse(response) {
    const responseElement = document.createElement('div');
    responseElement.className = 'eliza-response'; // Add a class for styling
    responseElement.innerHTML = `<strong>Eliza:</strong> ${response}`;
    responseArea.appendChild(responseElement);
    responseArea.scrollTop = responseArea.scrollHeight;
}

function fetchResponse(userMessage) {
    // Your fetch logic to get Eliza's response
    // After receiving the response, call displayElizaResponse(response);

}
