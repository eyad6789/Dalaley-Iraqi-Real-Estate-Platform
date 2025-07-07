const sendCodeButton = document.getElementById('sendCodeButton');
const emailInput = document.getElementById('emailInput');

sendCodeButton.addEventListener('click', function() {
  const email = emailInput.value;
  // Perform validation and send a verification code to the provided email
  // Redirect to the verification code entry page
  window.location.href = `/verify-code?email=${email}`;
});
