const { createSauce } = require('../controllers/sauce.controller');

const router = require('express').Router();

router.get('/', createSauce)