import React, { createContext} from 'react'

const ExerciseContext = createContext({
  name: '',
  number: '',
  exercise: '',
  exercises: [],
  handleInputChange: () => {},
  handleAddExercise: () => {},
  handleToggleExercise: () => {},
  handleRemoveExercise: () => {}
})

export default ExerciseContext