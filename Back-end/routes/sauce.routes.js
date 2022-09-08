const router = require('express').Router();
const sauceController = require('../controllers/sauce.controller');

router.post('/', sauceController.createSauce);
router.get('/', sauceController.getAllSauces);
router.get('/:id', sauceController.getOneSauce);
// router.put('/:id', sauceController.modifySauce);
// router.delete('/:id', sauceController.deleteSauce);
// router.post('/:id/like', sauceController.setLike);

module.exports = router;