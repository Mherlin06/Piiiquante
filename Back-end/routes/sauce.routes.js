const router = require('express').Router();
const sauceController = require('../controllers/sauce.controller');

router.post('/', sauceController.createSauce);
router.get('/', sauceController.getAllSauces);
router.get('/:id', sauceController.getOneSauce);

module.exports = router;