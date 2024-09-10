// script.js

document.getElementById('generateButton').addEventListener('click', fetchPasswords);

function fetchPasswords() {
    // API URL to fetch passwords
    const apiUrl = 'https://password.ninja/api/password?numOfPasswords=10&';

    // Fetch passwords from the API
    fetch(apiUrl)
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Clear any existing passwords in the list
            const passwordList = document.getElementById('passwordList');
            passwordList.innerHTML = '';

            // Loop through each password and add to the list
            data.forEach(password => {
                const listItem = document.createElement('li');
                listItem.textContent = password;
                passwordList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching passwords:', error);
        });
}
