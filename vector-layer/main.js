if (geoapps) {
    geoapps.Initialize("demo.geoapps.nl"); // Connect to tenant
    var mapId = "08451f0f-37d8-4c93-89e3-89a3279a4f18"; // Connnect to map

    const map = geoapps.AddMap("map", mapId); // Initialize a new map
    map.Controls.AddZoomControls();
    map.onLoaded.add(() => {
        // Add a new vector layer
        const layer = map.Layers.CreateLayer({
            type: "vector",
        });

        // Set style for the layer
        const style = {
            circle: {
                radius: 5,
                stroke: {
                    color: [100, 100, 100, 1.0],
                    width: 1.0
                },
                fill: {
                    color: [47, 175, 73, 0.8]
                },
            },
        };
        layer.SetStyle(style);

        // Add layer to the map
        map.Layers.AddLayer(layer);

        // Add points to the map
        var point1 = layer.AddFeature("{\"type\":\"Point\",\"coordinates\":[208390, 473089]}");
        var point2 = layer.AddFeature("{\"type\":\"Point\",\"coordinates\":[208400, 473098]}");
        var point3 = layer.AddFeature("{\"type\":\"Point\",\"coordinates\":[208407, 473109]}");

        // Zoom to the point on the map
        map.ZoomToGeometry(point2.GetGeometry(), { maxZoom: 13 });
    });
}
else {
    console.error('GeoApps not available');
}
