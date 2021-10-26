var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

auth.onAuthStateChanged((user) => {
    if (user) {
        workerOnAuth(user)
        workerOnUI(user)
    } else {
        workerOnAuth(user)
        workerOnUI()
        console.log('User is logged Out');
    }
});

// sign-up
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    }).catch((e) => {
        signupForm.reset()
    })
})

// login
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // get user info
    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()
        loginForm.reset()
    }).catch((e) => {
        loginForm.reset()
    })
})


// logout
const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    auth.signOut()
    location.reload()
})

// google sign in 
const googleSignIn = document.querySelector('#google')
googleSignIn.addEventListener('click', (e) => {
    var provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            // ...
        }).catch((error) => {
            console.log(error.code);
        })
})