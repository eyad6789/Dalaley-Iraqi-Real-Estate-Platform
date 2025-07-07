// verifyCode.js
const verifyCodeButton = document.getElementById('verifyCodeButton');
const codeInput = document.getElementById('codeInput');

verifyCodeButton.addEventListener('click', function() {
  const code = codeInput.value;
  // Perform verification logic (check if the code is correct)
  // Redirect to the set new password page
  window.location.href = '../reset_password/resetPW.html';
});