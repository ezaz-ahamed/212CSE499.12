var map = L.map('map').setView([23.806954, 90.368476], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm1hc3VkIiwiYSI6ImNrdmk2NzA1dTBnZGcybm4wMTgzejB4cTcifQ.ynVJ4R_cZch4YbtlqGZFdA'
}).addTo(map);

if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
} else {

    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 2000);
}

var marker;

function getPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    if (marker) {
        map.removeLayer(marker)
    }


    marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup("<b>Your current location</b><br>Latitude: " + lat + "<br>Longitude: " + lng).openPopup();
}