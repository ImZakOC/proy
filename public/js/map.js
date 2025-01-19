function initMap() {
    const map = L.map('map').setView([24.0000, 53.0000], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    fetch('/data/example.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: function(feature) {
                    return { color: '#ff7800' };
                }
            }).addTo(map);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
}
