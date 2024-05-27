const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3003;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'test@123',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to database');
});

app.get('/api/useraddress', (req, res) => {
  console.log(req);
  db.query('SELECT * FROM user_address', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`User Address service listening at http://localhost:${port}`);
});
