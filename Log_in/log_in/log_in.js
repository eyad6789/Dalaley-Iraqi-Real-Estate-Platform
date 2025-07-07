const userName = document.getElementById("username");
const passWord = document.getElementById("password");

if (userName.includes("@")) {
  // The string contains the "@" symbol
  const Email = userName;
  // Do something with the newVariable, if needed
} 

const loginUrl = '/api/login';

const loginData = {
  username: userName,
  email: Email,
  password: passWord
};

fetch(loginUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(loginData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    return response.json();
  })
  .then(data => {
    // Redirect to the logged-in page or handle the success accordingly
    window.location.href = '/dashboard';
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle the error, possibly show a message to the user
  });
