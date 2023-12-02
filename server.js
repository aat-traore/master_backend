const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./routes/UserRoute')
port = process.env.PORT || 9000;
//---------------import des fichiers de configuratons-----------------
require ("dotenv").config({path: "./config/.env"});
require("./config/Db");
//---------------import des routes---------------------------------


app.use(cors());
app.use(express.json())

app.use('/api',users)

app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});