module.exports = function(app) {
  app.get('/usuarios', function(req, res) {
    res.send("Rota de usuarios");
  })
}