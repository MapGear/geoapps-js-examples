import Overlay from "ol/Overlay";
import { toStringHDMS } from 'ol/coordinate';
import { toLonLat } from 'ol/proj';

if (geoapps) {
    geoapps.Initialize("demo.geoapps.nl"); // Connect to tenant
    var mapId = "08451f0f-37d8-4c93-89e3-89a3279a4f18"; // Connnect to map

    var map = geoapps.AddMap("map", mapId); // Initialize a new map
    map.Controls.AddZoomControls();
    map.onLoaded.add(() => {
        runOlCode(map.GetInternalMapObject());
    });
}
else {
    console.error('GeoApps not available');
}


// Sample code from: https://openlayers.org/en/latest/examples/overlay.html
function runOlCode(map) {

    const pos = [208313, 473066];

    // Popup showing the position the user clicked
    const popup = new Overlay({
        element: document.getElementById('popup'),
    });
    map.addOverlay(popup);

    // Vienna marker
    const marker = new Overlay({
        position: pos,
        positioning: 'center-center',
        element: document.getElementById('marker'),
        stopEvent: false,
    });
    map.addOverlay(marker);

    // Vienna label
    const amersfoort = new Overlay({
        position: pos,
        element: document.getElementById('deventer'),
    });
    map.addOverlay(amersfoort);

    map.on('click', function (evt) {
        const element = popup.getElement();
        const coordinate = evt.coordinate;
        const hdms = toStringHDMS(toLonLat(coordinate));

        $(element).popover('dispose');
        popup.setPosition(coordinate);
        $(element).popover({
            container: element,
            placement: 'top',
            animation: false,
            html: true,
            content: '<p>The location you clicked was:</p><code>' + hdms + '</code>',
        });
        $(element).popover('show');
    });
}
