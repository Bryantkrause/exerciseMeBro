import { createContext} from 'react'

const ExerciseContext = createContext({
  name: '',
  number: '',
  birthday: '',
  weight: '',
  data: '',
  exercise: '',
  exercises: [],
  handleInputChange: () => {},
  getExercises: () => {},
  renderChart: () => {},
  handleAddExercise: () => {},
  handleToggleExercise: () => {},
  handleRemoveExercise: () => {}
})

export default ExerciseContext