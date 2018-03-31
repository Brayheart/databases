CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT primary key not null auto_increment,
  name char(20) not null
);

CREATE TABLE messages (
  id INT primary key not null auto_increment,
  roomname char(20),
  users INT REFERENCES users (id),
  message text(200)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- // Create a database connection and export it from this file.
-- // You will need to connect with the user "root", no password,
-- // and to the database "chat".


-- // CREATE TABLE example (
-- //     id smallint unsigned not null auto_increment, 
-- //     name varchar(20) not null, 
-- //     constraint pk_example primary key (id));

-- // INSERT INTO example ( id, name ) VALUES ( null, 'Sample data' );
