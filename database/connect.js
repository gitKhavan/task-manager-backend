const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_URL,
 
});

console.log('DB_URL:', process.env.DB_URL);

module.exports = db;
