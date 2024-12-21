CREATE DATABASE app_food;

USE app_food;

CREATE TABLE
	food_type (
		type_id INT AUTO_INCREMENT,
		type_name VARCHAR(255) NOT NULL,
		-- PK
		PRIMARY KEY (type_id)
	);

CREATE TABLE
	user (
		user_id INT AUTO_INCREMENT,
		full_name VARCHAR(100) NOT NULL,
		email VARCHAR(100) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL,
		-- PK
		PRIMARY KEY (user_id)
	);

-- N - 1 food_type
CREATE TABLE
	food (
		food_id INT AUTO_INCREMENT,
		food_name VARCHAR(255) NOT NULL,
		image VARCHAR(255),
		price FLOAT NOT NULL,
		`desc` VARCHAR(255),
		type_id INT NOT NULL,
		-- Khóa chính
		PRIMARY KEY (food_id),
		-- FK food_type
		FOREIGN KEY (type_id) REFERENCES food_type (type_id) ON DELETE CASCADE
	);

-- tg user & food
CREATE TABLE
	`order` (
		user_id INT NOT NULL,
		food_id INT NOT NULL,
		amount INT,
		code VARCHAR(255),
		arr_sub_id VARCHAR(255),
		-- PK
		PRIMARY KEY (user_id, food_id),
		-- FK user
		FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE CASCADE,
		-- FK food
		FOREIGN KEY (food_id) REFERENCES food (food_id) ON DELETE CASCADE
	);

-- N - 1 food
CREATE TABLE
	sub_food (
		sub_id INT AUTO_INCREMENT,
		sub_name VARCHAR(255) NOT NULL,
		sub_price FLOAT,
		food_id INT,
		-- PK
		PRIMARY KEY (sub_id),
		-- FK food
		FOREIGN KEY (food_id) REFERENCES food (food_id) ON DELETE CASCADE
	);

CREATE TABLE
	restaurant (
		res_id INT AUTO_INCREMENT,
		res_name VARCHAR(255) NOT NULL,
		image VARCHAR(255),
		`desc` VARCHAR(255),
		-- PK
		PRIMARY KEY (res_id)
	);

-- tg user & restaurant
CREATE TABLE
	rate_res (
		user_id INT NOT NULL,
		res_id INT NOT NULL,
		amount INT NOT NULL,
		date_rate DATETIME NOT NULL,
		-- PK
		PRIMARY KEY (user_id, res_id),
		-- FK user
		FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE CASCADE,
		-- FK restaurant
		FOREIGN KEY (res_id) REFERENCES restaurant (res_id) ON DELETE CASCADE
	);

-- tg user & restaurant
CREATE TABLE
	like_res (
		user_id INT NOT NULL,
		res_id INT NOT NULL,
		date_like DATETIME NOT NULL,
		-- PK
		PRIMARY KEY (user_id, res_id),
		-- FK user
		FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE CASCADE,
		-- FK restaurant
		FOREIGN KEY (res_id) REFERENCES restaurant (res_id) ON DELETE CASCADE
	);

-- INSERT food_type
INSERT INTO
	food_type (type_name)
VALUES
	('Fast Food'),
	('Beverages'),
	('Desserts'),
	('Main Course');

-- INSERT user
INSERT INTO
	user (full_name, email, password)
VALUES
	('John Doe', 'john.doe@example.com', 'password123'),
	(
		'Jane Smith',
		'jane.smith@example.com',
		'password456'
	),
	(
		'Alice Johnson',
		'alice.johnson@example.com',
		'password789'
	);

-- INSERT food
INSERT INTO
	food (food_name, image, price, `desc`, type_id)
VALUES
	(
		'Burger',
		'burger.jpg',
		5.99,
		'Delicious beef burger',
		1
	),
	(
		'Pizza',
		'pizza.jpg',
		8.99,
		'Cheesy pizza with toppings',
		1
	),
	('Coke', 'coke.jpg', 1.99, 'Refreshing soda', 2),
	(
		'Ice Cream',
		'icecream.jpg',
		3.49,
		'Vanilla ice cream',
		3
	);

-- INSERT `order`
INSERT INTO
	`order` (user_id, food_id, amount, code, arr_sub_id)
VALUES
	(1, 1, 2, 'ORDER123', '1,2'),
	(2, 3, 1, 'ORDER124', '3'),
	(3, 4, 3, 'ORDER125', '4');

-- INSERT sub_food
INSERT INTO
	sub_food (sub_name, sub_price, food_id)
VALUES
	('Extra Cheese', 0.5, 1),
	('Bacon', 1.0, 1),
	('Pepperoni', 1.5, 2),
	('Chocolate Sauce', 0.75, 4);

-- INSERT restaurant
INSERT INTO
	restaurant (res_name, image, `desc`)
VALUES
	(
		'Burger King',
		'burger_king.jpg',
		'Famous for burgers'
	),
	('Pizza Hut', 'pizza_hut.jpg', 'Delicious pizzas'),
	(
		'Starbucks',
		'starbucks.jpg',
		'Coffee and beverages'
	);

-- INSERT rate_res
INSERT INTO
	rate_res (user_id, res_id, amount, date_rate)
VALUES
	(1, 1, 5, '2024-12-20 14:00:00'),
	(2, 2, 4, '2024-12-21 10:30:00'),
	(3, 3, 3, '2024-12-21 12:00:00');

-- INSERT like_res
INSERT INTO
	like_res (user_id, res_id, date_like)
VALUES
	(1, 1, '2024-12-20 15:00:00'),
	(2, 2, '2024-12-21 11:00:00'),
	(3, 3, '2024-12-21 13:00:00');