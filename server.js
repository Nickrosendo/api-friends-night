const
  app = require('./config/express'),
  port = process.env.PORT || 4999;

app.listen(port, () => {
  console.log(`Escutando na porta : ${port}`);
});