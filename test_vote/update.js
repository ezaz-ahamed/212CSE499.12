var map = L.map('map').setView([23.806954, 90.368476], 17)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm1hc3VkIiwiYSI6ImNrdmk2NzA1dTBnZGcybm4wMTgzejB4cTcifQ.ynVJ4R_cZch4YbtlqGZFdA'
}).addTo(map)

const markerArray = []

db.collection("existingLocation").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const locationData = [data.latitude, data.longitude]
        L.marker(locationData)
            .bindPopup("Can Park Here")
            .addTo(map);
    })
})

var update = document.getElementById("update")

update.addEventListener("click", () => {
    var toBeAddedRef = db.collection("toBeAdded")
    var existingRef = db.collection("existingLocation")
    var query = toBeAddedRef.where("votes", ">", 10)

    query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            console.log(data);
            existingRef.add({
                latitude: data.latitude,
                longitude: data.longitude
            })
        })
    })

})