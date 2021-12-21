
function updateLength(length) {
    // Display length in meters with 2 decimals
    $("#length").text("Length: " + length.toFixed(2) + " meters");
}

if (geoapps) {
    geoapps.Initialize("demo.geoapps.nl"); // Connect to tenant
    var mapId = "08451f0f-37d8-4c93-89e3-89a3279a4f18"; // Connnect to map

    // Initialize a new map
    var map = geoapps.AddMap("map", mapId);
    map.Controls.AddZoomControls();

    // Wait for map load to add interactions
    map.onLoaded.add(() => {

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
