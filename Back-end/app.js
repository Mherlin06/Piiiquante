const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path:'./config/.env'});

const userRoutes = require('./routes/user.routes');
const sauceRoutes = require('./routes/sauce.routes');

const app = express();

// Connection to DataBase
mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@projet6.c5rfnv1.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch( error => console.log('Connexion à MongoDB échouée !', error ));

// Fix CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parse the data into json format
app.use(express.json());

// Routes
const sauceModel = require('./models/sauce.model');

app.post('/api/sauces', (req, res, next) => {
  delete req.body._id;
  const sauce = new sauceModel({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({ message: "La sauce a bien été enregistrée !"}))
    .catch(error => res.status(400).json({error}));
});

app.use('/api/sauces', (req, res, next) => {
  sauceModel.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({error}));
});

app.use('/api/auth', userRoutes);

module.exports = app;
