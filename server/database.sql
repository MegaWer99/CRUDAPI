CREATE DATABASE empleados;

CREATE TABLE clientes(
	idcliente SERIAL PRIMARY KEY,
	nombre VARCHAR(45),
	apellidopaterno VARCHAR(45),
	apellidomaterno VARCHAR(45),
	edad VARCHAR(3),
    fechanacimiento DATE,
	telefono VARCHAR(10),
	ciudad VARCHAR(45)
);

SELECT * FROM clientes; 