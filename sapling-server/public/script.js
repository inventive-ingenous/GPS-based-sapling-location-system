var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

fetch("/api/saplings")
  .then(res => res.json())
  .then(data => {
    data.forEach(s => {
      L.marker([s.latitude, s.longitude])
        .addTo(map)
        .bindPopup(
          `<b>Sapling</b><br>Lat: ${s.latitude}<br>Lon: ${s.longitude}<br>${s.timestamp}`
        );
    });
  });
