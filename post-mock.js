const curl = require('curl');

curl.post(
  'http://localhost/usuarios/usuario',
  JSON.stringify({
        'email': 'nicolasrosendo@hotmail.com',
        'senha': '123456'
  }),
  function(err, response, data){
    console.log('erro: ', err);
    console.log('data: ', data);
  }

)