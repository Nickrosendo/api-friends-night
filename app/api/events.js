const mongoose = require("mongoose"),
  api = {};  

api.lista = (req, res) => {
  res.json( { text: 'Ola'})
  // model.find({}).then(
  //   fotos => res.json(fotos),
  //   error => {
  //     console.log(error)
  //     res.sendStatus(500).json(error);
  //   }
  // );
};

module.exports = api;