var map = L.map('map').setView([23.806954, 90.368476], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,

}).addTo(map);



var freePark = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var premPark = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var free = document.getElementById("free");
var prem = document.getElementById("prem");

let iconValue = freePark;
let popupContent = "Free Park At ";

free.addEventListener("click", () => {
    iconValue = freePark;
});

prem.addEventListener("click", () => {
    iconValue = premPark;
    popupContent = "Premium Parking At ";
});

function putMarker(e) {
    loc = L.marker(e.latlng, {
        icon: iconValue
    }).addTo(map);

    loc.bindPopup(popupContent + e.latlng.toString()).openPopup();
};

map.on('click', putMarker);