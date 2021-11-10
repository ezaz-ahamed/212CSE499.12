var map = L.map('map').setView([23.806954, 90.368476], 17)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm1hc3VkIiwiYSI6ImNrdmk2NzA1dTBnZGcybm4wMTgzejB4cTcifQ.ynVJ4R_cZch4YbtlqGZFdA'
}).addTo(map)

function onMapClick(e) {
    var html = document.getElementById("latlng")
    html.innerHTML = e.latlng.toString()
}
map.on('click', onMapClick)


document.getElementById("mybtn").addEventListener("click", function (event) {

    event.preventDefault()
    const latitude = document.getElementById('lat').value
    const longitude = document.getElementById('lon').value
    const votes = document.getElementById('votes').value


    var toBeAddedRef = db.collection("toBeAdded")
    toBeAddedRef.add({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        votes: parseInt(votes)
    })

    window.open('./index.html')
});