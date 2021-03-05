DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees; 

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
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
