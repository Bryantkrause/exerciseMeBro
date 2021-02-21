import React, { useEffect, useState } from 'react'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseForm from '../../components/ExerciseForm'
import ExerciseDisplay from '../../components/ExerciseDisplay'

const { getExercise, addExercise, deleteExercise } = ExerciseAPI

const Exercises = () => {

const [exerciseState, setExerciseState] = useState({

})

useEffect(() =>{
    getExercise()
    .then(({data}) => {
        console.log(data)
        let exercises = []
        exercises.push(data)
        setExerciseState({ ...exerciseState, exercises})
    })
    .catch(e => console.error(e))
}, [])

return (
    <ExerciseContext.Provider value={exerciseState}>
        <ExerciseDisplay/>
    </ExerciseContext.Provider>
)

}

export default Exercises