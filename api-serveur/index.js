
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRoutes from './routes/routes.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.json())

const BASE_URL = 'mongodb+srv://<Nom_Utilisateur>:<Mon_Mot_De_Passe>@<informations du cluster>';
app.use('/products', productsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(BASE_URL)
.then(()=>{
    console.log("Serveur Connecté a la BD")
    app.listen(PORT, ()=>console.log(`Le serveur est en écoute sur le port: ${PORT}`))
})
.catch((error)=>console.log(error.message))