import axios from 'axios'

const ExerciseAPI = {

getExercise: () => axios.get('/exercises'),

addExercise: () => axios.post('/exercise'),

deleteExercise: (id) => axios.delete(`/exercise/${id}`),

}

export default ExerciseAPI