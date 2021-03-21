import { createContext} from 'react'

const ExerciseContext = createContext({
  name: '',
  number: '',
  birthday: '',
  weight: '',
  data: '',
  exercise: '',
  exercises: [],
  inputChange: () => {},
  getExercises: () => {},
  renderChart: () => {},
  exerciseSubmit: () => {},
  handleToggleExercise: () => {},
  handleRemoveExercise: () => {}
})

export default ExerciseContext