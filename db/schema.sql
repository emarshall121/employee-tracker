DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees; 

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;

CREATE TABLE departments (
  id INT(10) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT(10) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT(10) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
