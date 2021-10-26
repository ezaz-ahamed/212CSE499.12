// creates user as a json, in users "collections" in NOSQL FormData, adds IDBTransaction, 
// conlogs the id

var firebaseConfig = {

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