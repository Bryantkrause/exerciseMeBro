module.exports = app => {
    require('./exerciseRoutes.js')(app),
    require('./userRoutes.js')(app)
  }