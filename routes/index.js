module.exports = app => {
    require('./exerciseRoutes.js')(app),
    require('./exerciseTypeRoutes.js')(app),
    require('./userRoutes.js')(app)
  }