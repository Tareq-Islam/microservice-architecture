const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3002;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to database');
});

app.get('/api/useremail', (req, res) => {
  db.query('SELECT * FROM user_email', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`User Email service listening at http://localhost:${port}`);
});
