import React from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Col, Row, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const ExerciseDisplay = () => {
    'need to update display'
return(
    <ExerciseContext.Consumer>
{
({exercises, handleRemoveExercise}) => (
    <>
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
                    exercises.map(({_id, name, weight, number, birthday}, i) =>
                    <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{_id}</td>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>{number}</td>
                        <td>{birthday}</td>
                        <td><button onClick={() => handleRemoveExercise(_id)}>Delete </button></td>
                    </tr>
                    )
                }
            </tbody>
        </Table>


    </>
)

}
    </ExerciseContext.Consumer>
)
}

export default ExerciseDisplay;