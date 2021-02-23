import React, { useContext } from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Table } from 'reactstrap';

const ExerciseDisplay = () => {
    
    const {exercises, handleRemoveExercise} = useContext(ExerciseContext)

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
                        
                        // exercises.map(exersice => exersice.map(exersice =>{
                        //     console.log(exersice)
                        // }))
                        exercises.map(exercises=> {
                            <td>1</td>
                            console.log(exercises)
                        })

                }
                
            </tbody>
        </Table>



)
}

export default ExerciseDisplay;