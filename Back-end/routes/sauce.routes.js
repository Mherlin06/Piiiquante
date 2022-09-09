const router = require('express').Router();
const sauceController = require('../controllers/sauce.controller');
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceController.createSauce);
router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
// router.put('/:id', auth, sauceController.modifySauce);
// router.delete('/:id', auth, sauceController.deleteSauce);
// router.post('/:id/like', auth, sauceController.setLike);

module.exports = router;