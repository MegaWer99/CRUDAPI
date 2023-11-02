const Pool =  require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Admin123',
    host: "localhost",
    port: '5432',
    database: 'empleados'
});

module.exports = pool;