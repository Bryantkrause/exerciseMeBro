const { ExerciseType, User } = require('../models')

module.exports = app => {

  // GET all exercises
  app.get('/exerciseTypes', (req, res) => {
    console.log('getting them exercises, get all route hit')
    ExerciseType.find()
      // .populate('user')
      .then(exercises => res.json(exercises))
      .catch(e => console.error(e))
  })

    // GET one exercise
    app.get('/exerciseType/:id', (req, res) => {
        ExerciseType.findOne({ _id: req.params.id })
          .populate('user')
          .then(exercises => res.json(exercises))
          .catch(e => console.error(e))
      })

  // POST one exercise
  app.post('/exerciseType', (req, res) => {
    ExerciseType.create(req.body)
      .then(({ _id }) => {
        User.updateOne({_id: req.body.user},
           {$push: {exercise: _id}
        })
          .then(() => res.sendStatus(200))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })


    // update one exercise
    app.put('/exerciseType/:id', (req, res) => {
      console.log("exercise put route hit")
      ExerciseType.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one exercise
        app.delete('/exerciseType/:id', (req, res) => {
            ExerciseType.deleteOne({ _id: req.params.id })
              .then(exercise => res.json(exercise))
              .catch(e => console.log(e))
      })
    }
