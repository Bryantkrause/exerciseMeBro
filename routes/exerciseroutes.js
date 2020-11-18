const { Exercise, User } = require('../models')

module.exports = app => {

  // GET all exercises
  app.get('/exercises', (req, res) => {
    console.log('getting them exercises, get all route hit')
    Exercise.find()
      // .populate('user')
      .then(exercises => res.json(exercises))
      .catch(e => console.error(e))
  })

    // GET one exercise
    app.get('/exercise/:id', (req, res) => {
        Exercise.findOne({ _id: req.params.id })
          .populate('user')
          .then(exercises => res.json(exercises))
          .catch(e => console.error(e))
      })

  // POST one exercise
  app.post('/exercise', (req, res) => {
    Exercise.create(req.body)
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
    app.put('/exercises/:id', (req, res) => {
      console.log("exercise put route hit")
      Exercise.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one exercise
        app.delete('/exercise/:id', (req, res) => {
            Exercise.deleteOne({ _id: req.params.id })
              .then(exercise => res.json(exercise))
              .catch(e => console.log(e))
      })
    }
