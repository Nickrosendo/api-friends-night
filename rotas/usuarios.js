module.exports = function(app) {
  app.get('/usuarios', function(req, res) {
    let usuarios = {
      'nome': 'Nicolas Oliveira Rosendo',
      'senha': '123456'
    }
    res.send(usuarios);
    
  });

  app.post('/usuarios/usuario', function(req, res) {
    const usuario = req.body;
    if(usuario){
      res.status(200).send("usuario cadastrado");
    }else 
      res.status(400).send("falha ao adicinar usuario");
    
    
  });


}