import WFSLayer from "@arcgis/core/layers/WFSLayer.js";
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map.js";

// Set up map and view
const map = new Map({
    basemap: "gray-vector"
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [6.158202, 52.254178], // Deventer
    zoom: 12,
    popup: {
        defaultPopupTemplateEnabled: true // popup will be enabled on the wfslayer
    }
});

// Create and add a WFSLayer to the map
const layer = new WFSLayer({
    url: "https://demo.geoapps.nl/services/wfs/?token=4b4154dc0b7f4c029a2b4d07264f43f9&", // When used with a token, please change the url to: https://demo.geoapps.nl/services/wfs/?token=<token>&" and replace <token> with your token
    name: "gebouwen", // Put here the name of your layer that is assigned in the Layer Service in GeoApps
    copyright: "GeoApps Demo Service"
});

map.add(layer);
