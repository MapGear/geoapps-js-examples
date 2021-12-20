
if (geoapps) {

    // Initialize the map
    geoapps.Initialize("demo.geoapps.nl"); // Connect to tenant
    var mapId = "08451f0f-37d8-4c93-89e3-89a3279a4f18"; // Select map
    var map = geoapps.AddMap("map", mapId); // Initialize a new map
    map.Controls.AddZoomControls();

    // Wait for map load before binding the interactions
    map.on("loaded", function () {
        console.log("Map load completed!");

        // Display results
        map.Measurements.onFinished.add(function (res) {
            $("#results").text(JSON.stringify(res));
        });

        // Interactions
        $("#MeasureLine").click(function () {
            map.Measurements.StartMeasurement("LineString");
        });

        $("#MeasureCircle").click(function () {
            map.Measurements.StartMeasurement("Circle");
        });

        $("#MeasurePolygon").click(function () {
            map.Measurements.StartMeasurement("Polygon");
        });

        $("#CancelMeasurement").click(function () {
            map.Measurements.StopMeasurement();
        });

        $("#ResetMeasurement").click(function () {
            map.Measurements.ResetMeasurement();
        });
    });
}
else {
    console.error('GeoApps not available');
}