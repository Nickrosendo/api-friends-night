const
  app = require('./config/express'),
  port = 8080

app.listen(port, () => {
  console.log(`Escutando na porta: ${port}`);
});