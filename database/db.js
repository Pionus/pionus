import mysql from "mysql2/promise";

const pool = await mysql.creatPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "pionus",
    connectionLimit: 10,
});


export default pool;
