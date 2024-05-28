const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3003;

const db_host = process.env.DB_HOST || "localhost";
const db_user = process.env.DB_USER || "root";
const db_password = process.env.DB_PASSWORD || "test@123";
const db_name = process.env.DB_Name || 'testdb';

const dbconection = () => {
  const db = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name
  });

  db.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected to database');
  });
  return db;
}

app.get('/api/useraddress', (req, res) => { 
  dbconection().query('SELECT * FROM user_address', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`User Address service listening at http://localhost:${port}`);
});
