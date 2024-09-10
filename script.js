// script.js

document.getElementById('generateButton').addEventListener('click', fetchPassword);
document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

function fetchPassword() {
    const apiUrl = 'https://password.ninja/api/password?instruments=true&colours=true&shapes=true&food=true&sports=true&transport=true&symbols=true&randCapitals=true&numOfPasswords=1&maxLength=16&';

    fetch(apiUrl)
        .then(response => response.text())
        .then(password => {
            password = password.replace(/^"|"$/g, '');  // Remove surrounding quotes
            const passwordList = document.getElementById('passwordList');
            passwordList.innerHTML = '';  // Clear previous password
            const listItem = document.createElement('li');
            listItem.textContent = password;
            passwordList.appendChild(listItem);
        })
        .catch(error => console.error('Error fetching password:', error));
}

function toggleDarkMode() {
    const isChecked = document.getElementById('darkModeToggle').checked;
    document.body.classList.toggle('dark-mode', isChecked);
    document.querySelector('.container').classList.toggle('dark-mode', isChecked);

    // Apply dark mode to all list items
    document.querySelectorAll('ul li').forEach(item => {
        item.classList.toggle('dark-mode', isChecked);
    });

    // Apply dark mode to the button
    document.querySelector('button').classList.toggle('dark-mode', isChecked);
}
