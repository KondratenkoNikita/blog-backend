CREATE DATABASE blogdevelop;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255),
  sure_name VARCHAR(255),
  email VARCHAR(255),
  img_url VARCHAR(255),
  post_id VARCHAR(255),
);