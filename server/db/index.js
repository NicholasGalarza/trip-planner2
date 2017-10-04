const {db, Hotel, Restaurant, Activity, Place} = require('./models');

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
