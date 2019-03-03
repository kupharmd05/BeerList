drop database if exists beers_db;
CREATE DATABASE beers_db;
USE beers_db;


CREATE TABLE beers
(
id int NOT NULL AUTO_INCREMENT,
beer varchar(100) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);