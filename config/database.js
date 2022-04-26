const Sequalize = require('sequelize');

const db = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
      dialect : 'mysql',
      host : process.env.DB_HOST,
      // logging:  (...msg) => console.log('------msg-------',msg),
      logging: false,
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      // timezone: '+05:30'
  },
);


(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = db;
