const { model, Schema } = require('mongoose')

module.exports = {
    User: require('./User.js')(model, Schema),
    ExerciseType: require('./ExerciseType.js')(model, Schema),
    Exercise: require('./Exercise.js')(model, Schema)
}
