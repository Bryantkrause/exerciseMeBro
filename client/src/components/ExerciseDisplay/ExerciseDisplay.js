import React from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Col, Row, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const ExerciseDisplay = () => {
return(
    <ExerciseContext.Consumer>
{
({exercises}) => (
    <>
        <Table dark>
            <thead>
                <tr>
                    <th><h4>Name</h4></th>
                    <th><h4>Weight</h4></th>
                    <th><h4>Amount</h4></th>
                    <th><h4>Date</h4></th>
                </tr>
            </thead>
            <tbody>
                {
                    exercises.map(({_id, name, weight, number, timestamp}, i) =>
                    <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>{number}</td>
                        <td>{timestamp}</td>
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