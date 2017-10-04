const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoicGluZ3dpbnpsb3R5IiwiYSI6ImNqOGJ0NGF4ejAxcnQyd29razNnM29ncDYifQ.9hm_D0gtkCHlJSEm6rkomg";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v9" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

fetch('/api/attractions')
.then(result => result.json())
.then( data => {
  console.log(data);//i want to look at how to get the selected opti
  renderOptions('hotels-choices', 'hotels');
  renderOptions('restaurants-choices', 'restaurants');
  renderOptions('activities-choices', 'activities');

  function renderOptions (selectorId, table){
    var selector = document.getElementById(selectorId);
    data[table].forEach((item) => {
      var options = document.createElement('option');
      options.text = item.name;
      selector.appendChild(options);
    });
  }

})
.catch(console.error);