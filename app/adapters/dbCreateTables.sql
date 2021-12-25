-- PostgreSQL'de table olusturma komutlari

CREATE TABLE vehicles (
	id SERIAL PRIMARY KEY,
	vehicle_plate VARCHAR ( 20 ) NOT NULL,
	current_status INT NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE devices (
	id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL,
	device_type_id INT NOT NULL,
	device_name VARCHAR (75) NOT NULL,
	is_online BOOLEAN NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE devices_type (
	id SERIAL PRIMARY KEY,
	device_name VARCHAR (75) NOT NULL,
	device_description VARCHAR (255) NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE log_temperature (
	id SERIAL PRIMARY KEY,
	vehicle_id INT NOT NULL,
	device_id INT NOT NULL,
	read_data VARCHAR (50) NOT NULL,
	created_at TIMESTAMP
);

CREATE TABLE log_location (
	id SERIAL PRIMARY KEY,
	vehicle_id INT NOT NULL,
	device_id INT NOT NULL,
	latitude VARCHAR (50) NOT NULL,
	longitude VARCHAR (50) NOT NULL,
	created_at TIMESTAMP
);
