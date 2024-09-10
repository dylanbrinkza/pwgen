// script.js

document.getElementById('generateButton').addEventListener('click', fetchPassword);

function fetchPassword() {
    // API URL with all the parameters you specified
    const apiUrl = 'https://password.ninja/api/password?instruments=true&colours=true&shapes=true&food=true&sports=true&transport=true&symbols=true&randCapitals=true&numOfPasswords=1&maxLength=16&';

    // Fetch password from the API
    fetch(apiUrl)
        .then(response => response.text())  // We use .text() because the API returns plain text
        .then(password => {
            // Remove the surrounding double quotes from the password
            password = password.replace(/^"|"$/g, '');  // This removes quotes from the start and end of the string

            // Clear any existing passwords in the list
            const passwordList = document.getElementById('passwordList');
            passwordList.innerHTML = '';

            // Add the password as a list item
            const listItem = document.createElement('li');
            listItem.textContent = password;
            passwordList.appendChild(listItem);
        })
        .catch(error => {
            console.error('Error fetching password:', error);
        });
}
