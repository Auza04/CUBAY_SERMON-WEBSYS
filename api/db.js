/* eslint-disable no-undef */
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'cubaysermon.system',
    user: 'root',
    password: '',
    database: 'cubay_sermon',
});

module.exports =  Object.freeze({ pool: pool });