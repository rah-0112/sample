const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'example',
    password: '#R@hul0112#',
    port: 5432,
});

module.exports = pool;