const router = require('express').Router();
const sauceController = require('../controllers/sauce.controller');

// Create a new sauce
router.post('/', sauceController.createSauce);

// Get all sauces
router.get('/', sauceController.getAllSauces);

module.exports = router;