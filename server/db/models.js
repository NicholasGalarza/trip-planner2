const Sequelize = require('sequelize');
const db = require('./db');

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  loction: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1.0,
      max: 5.0
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1.0,
      max: 5.0
    }
  }
});

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity
};
