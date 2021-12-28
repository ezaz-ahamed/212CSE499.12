var firebaseConfig = {
    apiKey: "AIzaSyBnGMPSO546hpwnIqhWyMXcRweY6PuzaAU",
    authDomain: "cse499a-dff5d.firebaseapp.com",
    projectId: "cse499a-dff5d",
    storageBucket: "cse499a-dff5d.appspot.com",
    messagingSenderId: "376721390723",
    appId: "1:376721390723:web:bb97a93b72f196057f2fb6",
    measurementId: "G-FWCDFEQ3XX"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var db = firebase.firestore();

function add(collection_name, fname, lname, email, phone) {
    db.collection(collection_name).add({
        first: fname,
        last: lname,
        email: email,
        phone: phone
    }).then(function () {
        console.log("Status Saved");
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });

}


// default sign up
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const fname = signupForm['fname'].value
    const lname = signupForm['lname'].value
    const email = signupForm['email'].value
    const password = signupForm['password'].value
    const phone = signupForm['phone'].value

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        // close the signup modal & reset form
        signupForm.reset()
    }).catch((e) => {
        signupForm.reset()
    })

    add("users", fname, lname, email, phone);
    setTimeout(() => {
        window.open("./profile.html")
    }, 1000);

})