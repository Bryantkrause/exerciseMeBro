import React from 'react'
import axios from 'axios'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseForm from '../../components/ExerciseForm'
import ExerciseDisplay from '../../components/ExerciseDisplay'

class Exercises extends React.Component {
state = {
  name: '',
  number: '',
  exercise: '',
  exercises: [],
  handleInputChange: e => {
      this.setState({[e.target.name]: e.target.value})
  },
  handleAddExercise: () => {},
  handleToggleExercise: () => {},
  handleRemoveExercise: () => {}
}
render () {
    return (
        <ExerciseContext.Provider value={this.state}>
            <ExerciseForm/>
            <ExerciseDisplay/>
        </ExerciseContext.Provider>
    )
}
}

export default Exercises