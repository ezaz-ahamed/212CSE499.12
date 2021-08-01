var map = L.map('map').setView([23.806954, 90.368476], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoicm1hc3VkIiwiYSI6ImNrcm1lamV6ODc2cTkydnF1ZmE5ZmllaHoifQ.vu-5hQtqGd1O15IuiBy7PQ'
}).addTo(map);

var freeLoc = L.marker([23.803383,90.373150]).addTo(map);
freeLoc.bindPopup("Park Here").openPopup();