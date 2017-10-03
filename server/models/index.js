let Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/tripplaner',{
    logging: false
});

let Place = db.define('recipes', {
    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    loction: {
        type: Sequelize.ARRAY,
    }
});

let Hotel = db.define('recipes', {
    name: {
        type: Sequelize.STRING,
    },
    num_stars: {
        type: Sequelize.FLOAT,
    },
    amenities: {
        type: Sequelize.STRING
    }
});
let Activity = db.define('recipes', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.STRING,
    }
});

let Restaurant = db.define('recipes', {
    name: {
        type: Sequelize.STRING,
    },
    cuisine: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
    }
});
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);