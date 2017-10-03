let Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});
// db
// .authenticate()
// .then(() => {
//   console.log("I made it")
// }).catch(err => {
//   console.err("Oh no",err)
// });


let Place = db.define('place', {
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

let Hotel = db.define('hotel', {
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
let Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

let Restaurant = db.define('restaurant', {
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
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity
};
