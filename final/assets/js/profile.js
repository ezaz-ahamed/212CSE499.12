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
const db = firebase.firestore()

auth.onAuthStateChanged((user) => {
    if (user) {
        worker(user)
    } else {
        worker(user)
    }
});


const worker = (user) => {
    if (user !== null) {
        var location;
        // geolocation updates per 2 seconds
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {

            setInterval(() => {
                navigator.geolocation.getCurrentPosition(getPosition)
            }, 5000);
        }

        function getPosition(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            if (marker) {
                map.removeLayer(marker)
            }
            var greenIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',

                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            });


            location = L.marker([lat, lng], {
                icon: greenIcon
            }).addTo(map);
            location.bindPopup("<b>You are Here!</b>").openPopup();
        }

        const logout = document.getElementById('logout')
        const greet = document.getElementById('greet')

        logout.addEventListener('click', (e) => {
            auth.signOut()
            console.log('Helo');
            window.open('./index.html')
        })

        const usercollection = db.collection('users')
        usercollection.where('email', '==', user.email).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const fname = doc.data().first;
                greet.innerHTML = 'Hi ' + fname;
                console.log(doc.data());
            })
        })

        // map portion
        const existingCollection = db.collection('existingLocation')
        existingCollection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var marker = L.marker([doc.data().latitude, doc.data().longitude]).addTo(map);
                marker.bindPopup("You can park here!")
            });
        });

        // temporary removable marker
        var marker;
        var lat, lng;
        // add parking portion
        function onMapClick(e) {
            const coord = document.getElementById('showcoord')
            lat = e.latlng.lat
            lng = e.latlng.lng
            coord.innerHTML = 'Want to add' + '<br>' + lat.toString().slice(0, 9) + ',' + lng.toString().slice(0, 9) + '<br>' + 'to the map?'
            marker = new L.Marker(e.latlng, {
                draggable: true
            });
            map.addLayer(marker);
            marker.bindPopup("Is this a valid parking address?<br>Click on the button on the sidebar to confirm.").openPopup();
        }
        map.on('click', onMapClick);

        const addPark = document.getElementById('addpark')
        addPark.addEventListener('click', (e) => {
            map.removeLayer(marker)

            db.collection('toBeAdded').add({
                latitude: lat,
                longitude: lng,
                votes: 1
            })

            window.open('./profile.html')
        })

        // map updates for votable locations
        // const mapUpdateVoting = document.getElementById('mapUpdateVoting')
        // mapUpdateVoting.addEventListener('click', (e) => {

        // })



    } else {
        window.open('./index.html', '_self')
    }
}