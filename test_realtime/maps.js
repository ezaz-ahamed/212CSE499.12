var map = L.map('map').setView([23.806954, 90.368476], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm1hc3VkIiwiYSI6ImNrdmk2NzA1dTBnZGcybm4wMTgzejB4cTcifQ.ynVJ4R_cZch4YbtlqGZFdA'
}).addTo(map);

function getCurrentPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup("<b>Your current position!</b><br>Latitude: " + lat + "<br>Longitude: " + lng).openPopup();
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

getCurrentPosition()