CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE IF NOT EXISTS user_mobile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_email (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_address (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO user_mobile (name) VALUES ('Mobile Data 1'), ('Mobile Data 2'), ('Mobile Data 3');
INSERT INTO user_email (name) VALUES ('Email Data 1'), ('Email Data 2'), ('Email Data 3');
INSERT INTO user_address (name) VALUES ('Address Data 1'), ('Address Data 2'), ('Address Data 3');
