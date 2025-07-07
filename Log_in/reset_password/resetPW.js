const setNewPasswordButton = document.getElementById('setNewPasswordButton');
const newPasswordInput = document.getElementById('newPasswordInput');

setNewPasswordButton.addEventListener('click', function() {
  const newPassword = newPasswordInput.value;
  // Perform logic to update the password on the server
  // Redirect to the login page or any other desired destination
  window.location.href = '../log_in/log_in.html';
});