const sauceModel = require('../models/sauce.model');

module.exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new sauceModel({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: "La sauce a bien été enregistrée !"}))
      .catch(error => res.status(400).json({error}));
};

module.exports.getAllSauces = (req, res, next) => {
    sauceModel.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({error}));
};

module.exports.getOneSauce = (req, res, next) => {
    sauceModel.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(400).json({error}));
};

module.exports.modifySauce = (req, res, next) => {

};

module.exports.deleteSauce = (req, res, next) => {

};

module.exports.setLike = (req, res, next) => {

};