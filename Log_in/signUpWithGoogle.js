const googleSignInButton = document.getElementById('googleSignInButton');

googleSignInButton.addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result.user);
    // User signed in with Google
    } catch (error) {
    console.error('Google Sign-In Error:', error.message);
    }
});
// Facebook Sign-In:
// html
// Copy code
// <!-- Add this script for Facebook SDK -->


// <!-- JavaScript code for Facebook Sign-In -->
window.fbAsyncInit = function() {
    FB.init({
    appId      : 'YOUR_FACEBOOK_APP_ID',
    cookie     : true,
    xfbml      : true,
    version    : 'v14.0'
    });
    
    FB.AppEvents.logPageView();   
};

const facebookSignInButton = document.getElementById('facebookSignInButton');

facebookSignInButton.addEventListener('click', async () => {
    try {
    const response = await firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
    console.log(response.user);
    // User signed in with Facebook
    } catch (error) {
    console.error('Facebook Sign-In Error:', error.message);
    }
});