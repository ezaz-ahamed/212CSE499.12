var firebaseConfig = {
    apiKey: "AIzaSyBnGMPSO546hpwnIqhWyMXcRweY6PuzaAU",
    authDomain: "cse499a-dff5d.firebaseapp.com",
    projectId: "cse499a-dff5d",
    storageBucket: "cse499a-dff5d.appspot.com",
    messagingSenderId: "376721390723",
    appId: "1:376721390723:web:bb97a93b72f196057f2fb6",
    measurementId: "G-FWCDFEQ3XX"
};

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()


const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // get user info
    const email = loginForm['email'].value
    const password = loginForm['password'].value
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        loginForm.reset()
        setTimeout(() => {
            window.open("./profile.html");
        }, 500);
    }).catch((e) => {
        window.open("./index.html");
    })
})

const user = firebase.auth().currentUser;
console.log(user);