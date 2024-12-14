const Pool = require("pg").Pool;

const pool = new Pool(
    {
        user: "postgres",
        password: "", //insert yout database username and password here
        host: "localhost",
        port: 5432,
        database: "perntodo"
    }
);

module.exports = pool;