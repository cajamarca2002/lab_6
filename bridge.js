// todo customize these numbers
let mapCenter = [-45, -93]; // this is the start point of the map
// how much are we zoomed in/out?
let zoomLevel = 4; // todo you can also change the size of the map div to make things fit

// Create the map object
let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel);

// Add tiles - the pictures that make up the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(bridgeMap); // todo change this name if you copied this from zoom chat

// When we have a set of objects, and they are all ba...
// all the things are bridges...
// A bridge object might be something like this, made...

// Store bridges as array of objects
let bridgeList = [
    { name: "Verrazano-Narrows Bridge", location: "New York, NY", span: "1298.4", coordinates: [40.6066, -74.0447] },
    { name: "Golden Gate Bridge", location: "San Francisco and Marin, CA", span: "1280.2", coordinates: [37.8199, -122.4783] },
    // todo the rest of the bridges
];

bridgeList.forEach(function(bridgeObject) {
    let bridgeName = bridgeObject.name;
    let bridgeCoordinates = bridgeObject.coordinates;
    // todo - add a popup - see videos or leaflet docs
    // example marker text "Tacoma Narrows Bridge, Tacoma, span is 1500ft"
    let bridgeMarker = L.marker(bridgeCoordinates);
    bridgeMarker.bindPopup("Hello?"); // todo change this text to text customized to this bridge
    bridgeMarker.addTo(bridgeMap);
});
