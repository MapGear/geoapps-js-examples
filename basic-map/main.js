if (geoapps) {
    geoapps.Initialize("demo.geoapps.nl"); // Connect to tenant
    var mapId = "08451f0f-37d8-4c93-89e3-89a3279a4f18"; // Connnect to map

    var map = geoapps.AddMap("map", mapId); // Initialize a new map
    map.Controls.AddZoomControls();
}
else {
    console.error('GeoApps not available');
}