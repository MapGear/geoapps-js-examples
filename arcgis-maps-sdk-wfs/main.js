import WFSLayer from "@arcgis/core/layers/WFSLayer.js";
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map.js";

// Deventer
const location = [6.158202, 52.254178];

// Set up map and view
const map = new Map({
    basemap: "gray-vector"
});

// Create mapview
const view = new MapView({
    container: "viewDiv",
    map: map,
    center: location,
    zoom: 12,
    popup: {
        defaultPopupTemplateEnabled: true
    }
});

// Construct a WFSLayer instance and add it to the map
const layer = new WFSLayer({
    url: "https://demo.geoapps.nl/services/wfs", // When used with a token, please change the url to: "https://demo.geoapps.nl/services/wfs/?token=<token>&" (without quotes) and replace <token> with your token
    name: "panden", // Put here the name of your layer that is assigned in the Layer Service in GeoApps
    copyright: "GeoApps Demo Service"
});

map.add(layer);
