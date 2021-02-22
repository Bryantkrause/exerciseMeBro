import React, { useContext } from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Col, Row, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const ExerciseDisplay = () => {
    
    const {exercises, handleRemoveExercise} = useContext(ExerciseContext)
    console.log(exercises)

return(
  
        <Table dark>
            <thead>
                <tr>
                    <th><h4>#</h4></th>
                    <th><h4>id</h4></th>
                    <th><h4>Name</h4></th>
                    <th><h4>Weight</h4></th>
                    <th><h4>Number</h4></th>
                    <th><h4>Date</h4></th>
                    <th><h4>Delete Exercise</h4></th>
                </tr>
            </thead>
            <tbody>
                {
                    // console.log(exercises)
                    <td>{exercises[0]}</td>
                // exercises.map(exercise => exercise.map(exercis =>{
                //     <tr key={exercis._id}>
                //         {/* <td>{i+1}</td> */}
                //         <td>{exercis._id}</td>
                //         <td>{exercis.name}</td>
                //         <td>{exercis.weight}</td>
                //         <td>{exercis.number}</td>
                //         <td>{exercis.birthday}</td>
                //         <td><button onClick={() => handleRemoveExercise(exercis._id)}>Delete </button></td>
                //     </tr>}
                //     )
                // )
                }
            </tbody>
        </Table>



)
}

export default ExerciseDisplay;