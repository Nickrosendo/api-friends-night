module.exports = function (app) {

  const AuthApi = app.api.auth;

  const unless = (path, middleware) => {
    return function (req, res, next) {      
      if (path === req.path) {
        return next();
      } else {
        return middleware(req, res, next);
      }
    };
  };

  app.post('/login', AuthApi.autentica)
  app.use(unless('/login', AuthApi.verificaToken));
}