// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
// Assigning variable map to the object L.map() & instantiate the object with the given string 'mapid'
// mapid references the id tag in <div>
// setView() method sets the view of the map with a geographical center ([lat, long], zoom level)
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Another option for setView
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });

// We create the tile layer that will be the background of our map. (code from Leaflet Quick Start Guide)
// API URL with a reference to accessToken
// OpenStreetMap URL inside the curly braces of our tileLayer()
// add the id attribute and assign it which will show the streets on the map.
// To change the map's style, change the map id using the list of Mapbox ids: mapbox/streets-v11, mapbox/outdoors-v11, mapbox/light-v10
//mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11, mapbox/navigation-guidance-night-v3
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map
streets.addTo(map);