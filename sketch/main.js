
function updateLength(length) {
    // Display length in meters with 2 decimals
    $("#length").text("Length: " + length.toFixed(2) + " meters");
}

if (geoapps) {
    geoapps.Initialize("preview.geoapps.nl"); // Connect to tenant
    var mapId = "ad7764d6-81a6-4b26-b50a-ae57e3fb2512"; // Publiek preview

    // Initialize a new map
    var map = geoapps.AddMap("map", mapId);
    map.Controls.AddZoomControls();

    // Wait for map load to add interactions
    map.on("loaded", function () {
        const layer = map.Layers.Items[0];

        $("#StartSketch").on("click", function () {
            map.Interactions.StartSketch("linestring");
        });

        $("#ClearSketch").on("click", function () {
            map.Interactions.ClearSketch();
        });

        map.Interactions.onSketchChanged.add((evt) => {
            updateLength(evt.Geometry.GetLength());
        });

        map.Interactions.onSketchCompleted.add((evt) => {
            updateLength(evt.Feature.GetGeometry().GetLength());
        })
    });
}
else {
    console.error('GeoApps not available');
}
