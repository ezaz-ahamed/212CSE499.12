// creates user as a json, in users "collections" in NOSQL FormData, adds IDBTransaction, 
// conlogs the id

var firebaseConfig = {
    apiKey: "AIzaSyBnGMPSO546hpwnIqhWyMXcRweY6PuzaAU",
    authDomain: "cse499a-dff5d.firebaseapp.com",
    projectId: "cse499a-dff5d",
    storageBucket: "cse499a-dff5d.appspot.com",
    messagingSenderId: "376721390723",
    appId: "1:376721390723:web:bb97a93b72f196057f2fb6",
    measurementId: "G-FWCDFEQ3XX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function add(collection_name, first, last, uname, password, email) {
    db.collection(collection_name).add({
        first: first,
        last: last,
        username: uname,
        password: password,
        email: email,
    }).then(function () {
        console.log("Status Saved");
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });

}


document.getElementById("myBtn").addEventListener("click", function () {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("pass").value;
    const email = document.getElementById("email").value;

    add("users", fname, lname, uname, pass, email);

    setTimeout(() => {
        window.open("./success.html");
    }, 1000);

});