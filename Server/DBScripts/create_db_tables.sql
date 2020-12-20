create database IF NOT EXISTS social_media;
use social_media;
create table IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username CHAR(50) UNIQUE,
    firstname CHAR(50),
    lastname CHAR(50),
    avatar VARCHAR(200)
);

CREATE table IF NOT EXISTS friends (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    friend_id INT,
    FOREIGN KEY (user_id) references users(id),
    FOREIGN KEY (friend_id) references users(id),
    UNIQUE KEY (user_id,friend_id)
);