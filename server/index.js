const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { Pool } = require("pg");

//middleware
app.use(cors());
app.use(express.json());

//Routers

//Route create

app.post("/create", async (req, res) => {
    try{
        const {nombre, apellidopaterno, apellidomaterno, edad, fechanacimiento, telefono, ciudad} = req.body;
        const CreateClient = await pool.query('INSERT INTO clientes(nombre, apellidopaterno, apellidomaterno, edad, fechanacimiento, telefono, ciudad) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
        [nombre, apellidopaterno, apellidomaterno, edad, fechanacimiento, telefono, ciudad]);
        res.json(CreateClient.rows[0]);
    }catch (err) {
        console.error(err.menssage);
    }
});

//Route Get All

app.get("/cliente", async (req, res) => {
    try{
        const Client = await pool.query('SELECT * FROM clientes');
        res.json(Client.rows);
    }catch (err) {
        console.error(err.menssage);
    }
});

//Route Get All For Id

app.get("/cliente/:id", async (req, res) => {
    try{
        
    const { id } = req.params;
    const Clientid = await pool.query('SELECT * FROM clientes WHERE idcliente = $1', [id]);
    res.json(Clientid.rows[0]);

    }catch (err){
        console.error(err.menssage);
    }

});

//Route Update Client

app.put("/actualizar/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { nombre, apellidopaterno, apellidomaterno, edad, fechanacimiento, telefono, ciudad } = req.body;
        const UpdateCliente = await pool.query('UPDATE clientes SET nombre = $1, apellidopaterno = $2, apellidomaterno = $3, edad = $4, fechanacimiento = $5, telefono = $6, ciudad = $7 WHERE idcliente = $8', 
        [nombre, apellidopaterno, apellidomaterno, edad, fechanacimiento, telefono, ciudad, id]);
        res.json('User Update Succefully');
    }catch (err){
        console.error(err.menssage);
    }
});

//Route Delete Client
app.delete("/eliminar/:id", async (req, res) => {
    try{
        
    const  { id }  = req.params.id;
    const EliminarCliente = await pool.query('DELETE FROM clientes WHERE idcliente = $1', [id]);
    res.json(`User ${id} Delete Succefully`);

    }catch (err){
        console.error(err.menssage);
    }

});

app.listen(5000, () =>{
    console.log("server has started on port 5000");
});