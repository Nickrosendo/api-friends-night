const 
  app = require('./config/custom-express.js')(),
  porta = 8080;

app.listen(porta, function() {
  console.log(`Escutando na porta ${porta}`);
})

