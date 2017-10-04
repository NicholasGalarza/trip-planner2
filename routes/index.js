const express = require('express');
const router = express.Router();
const {db, Hotel, Restaurant, Activity, Place} = require('../server/db');

let allAttractions = {};

router.get('/', (req, res, next) => { //home for api
  Hotel.findAll({})
    .then((hotels) => {
      allAttractions.hotels = hotels;
      return Restaurant.findAll();
    })
    .then((restaurants) => {
      allAttractions.restaurants = restaurants;
      return Activity.findAll();
    })
    .then((activities) => {
      allAttractions.activities = activities;
    })
    .then(() => {
      res.json(allAttractions);
    })
    .catch(next);
});

module.exports = router;
