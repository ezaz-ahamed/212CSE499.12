// creates user as a json, in users "collections" in NOSQL FormData, adds IDBTransaction, 
// conlogs the id

var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function add(collection_name, first, last, born) {
    db.collection(collection_name).add({
        first: first,
        last: last,
        born: Number(born)
    }).then(function () {
        console.log("Status Saved");
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });

}


document.getElementById("myBtn").addEventListener("click", function () {
    const fname = document.getElementById("fname").value;
    console.log(fname);
    const lname = document.getElementById("lname").value;
    const bdate = document.getElementById("bdate").value;
    add("users", fname, lname, bdate);

    setTimeout(() => {
        window.open("./success.html");
    }, 1000);

});