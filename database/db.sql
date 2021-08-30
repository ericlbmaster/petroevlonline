-- CREATE DATABASE database_name;
-- USE database_name;

--CleverCloud MySQL database
--Host: br4c2byotp2hfms7ymnj-mysql.services.clever-cloud.com
--Name: br4c2byotp2hfms7ymnj
--User: ukifddvlay34y7xf
--Password: acsi7oMJvfiNGkJdlUGf
--Port: 3306

USE br4c2byotp2hfms7ymnj;

--USERS TABLE
CREATE TABLE users(
    id INT(11) NOT NULL,
    username varchar(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

--LINKS TABLE
CREATE TABLE links(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLe links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;