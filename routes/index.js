const router = require('express').Router();
const Promise = require('bluebird');
const Activity = require('../models/activity');
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Place = require('../models/place');

module.exports = router;

router.get('/', (req, res) => {
  const findingActivities = Activity.findAll();
  const findingHotels = Hotel.findAll();
  const findingRestaurants = Restaurant.findAll();

  Promise.all([findingRestaurants, findingHotels, findingActivities])
  .spread((restaurants, hotels, activities) => {
    res.render('index', {restaurants, hotels, activities});
  });
});

