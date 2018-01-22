module.exports = function(app) {
  
  const eventsApi = app.api.events;
  
  app.route('/v1/events')
    .get(eventsApi.lista)
    
}