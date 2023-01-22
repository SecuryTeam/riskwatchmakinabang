var map = L.map('map').setView([14.918919, 120.885765], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var zoneA = L.polygon([
      [14.915685, 120.878770],
      [14.912450, 120.882675],
      [14.915519, 120.883620],
      [14.917800, 120.880830]
    ],).addTo(map);

    var zoneB = L.polygon([
      [14.913860, 120.884242],
      [14.914627, 120.891258],
      [14.919085, 120.890068],
      [14.918940, 120.885712]
    ], {
      color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    }).addTo(map);

     var zoneC = L.polygon([
      [14.919272, 120.885797],
      [14.921096, 120.886484],
      [14.920972, 120.882643],
      [14.916970, 120.882321]
    ],{
      color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    }).addTo(map);

    zoneA.bindPopup("Evacuation area");
    zoneB.bindPopup("Flood zone");
    zoneC.bindPopup("Flood zone");