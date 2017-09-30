const 
  app = require('./config/custom-express.js')(),
  porta = 80;

app.listen(porta, function() {
  console.log(`Escutando na porta ${porta}`);
})

