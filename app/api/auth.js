const mongoose = require("mongoose");
jwt = require("jsonwebtoken");

module.exports = function (app) {
  const api = {},
    model = mongoose.model("Usuario");

  api.autentica = (req, res) => {
  
    model
      .findOne({usuario: req.body.usuario, senha: req.body.senha})
      .then(usuario => {
        if (!usuario) {
          console.log("Usuario ou senha inválidos");
          res.sendStatus(401);
        } else {
          const token = jwt.sign({
            usuario: usuario.login
          }, app.get("secret"));                  

          res.send(token);
        }
      }, error => {
        console.log("Usuario ou senha inválidos");
        res.sendStatus(401);
      });
  };
  api.verificaToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (token) {
      jwt.verify(token, app.get("secret"), (err, decoded) => {
        if (err) {
          console.log("Acesso Negado");
          res.sendStatus(401);
        }
        req.usuario = decoded;
        next();
      });
    } else {
      console.log("Acesso Negado");
      res.sendStatus(401);
    }
  };
  return api;
};