const apiUrl ='http://dalalybeta.pythonanywhere.com/accounts/api/login/';

const userData = {
  username: 'exampleUsername',
  email: 'example@email.com',
  password: 'examplePassword'
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
