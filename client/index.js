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
  .then(data => {
    // function to populate the selectors.
    function renderOptions(selectorId, table) {
      let index = 0;
      const selector = document.getElementById(selectorId);
      data[table].forEach((item) => {
        let option = document.createElement('option');
        option.value = index++;
        option.text = item.name;
        selector.appendChild(option);
      });
    }

    // Populate options fields.
    renderOptions('hotels-choices', 'hotels');
    renderOptions('restaurants-choices', 'restaurants');
    renderOptions('activities-choices', 'activities');

    function getSelectedText(elementId) {
      const elt = document.getElementById(elementId);
      return (elt.selectedIndex == -1) ? null : elt.options[elt.selectedIndex].text;
    }

    function addToList(selectedText, table) {
      const ul = document.getElementById(table);
      const li = document.createElement("li"); //i been saying uneed to ake a li
      li.appendChild(document.createTextNode(selectedText));
      ul.appendChild(li);
    }

    // Here are our event listenrs for adding to iteraray.
    const hotelButton = document.getElementById('hotels-add');
    hotelButton.addEventListener('click', () => {
      const text = getSelectedText('hotels-choices');
      addToList(text, 'hotels-list');
    });

    const restaurantButton = document.getElementById('restaurants-add');
    restaurantButton.addEventListener('click', () => {
      const text = getSelectedText('restaurants-choices');
      addToList(text, 'restaurants-list');
    });

    const activityButton = document.getElementById('activities-add');
    activityButton.addEventListener('click', () => {
      const text = getSelectedText('activities-choices');
      addToList(text, 'activities-list');
    });







  })
  .catch(console.error);
