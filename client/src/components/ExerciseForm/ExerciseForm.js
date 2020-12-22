import React from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ExerciseForm = () => {
  return (
    <ExerciseContext.Consumer>
      {
        ({handleAddExercise, handleInputChange, name, number, weight}) => (
    <Form>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exercise">Exercise</Label>
            <Input type="text" name="exercise" id="exercise" placeholder="super cool exercise" onChange={handleInputChange} value={name}/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="number">Amount</Label>
            <Input type="number" name="number" id="number" placeholder="5" onChange={handleInputChange} value={number}/>
          </FormGroup>
        </Col>
      </Row>
      <Col md={3}>
      <FormGroup>
        <Label for="weight">Weight</Label>
        <Input type="number" name="weight" id="weight" placeholder="999" onChange={handleInputChange} value={weight}/>
      </FormGroup>
      </Col>
      <Button id="submit" onClick={handleAddExercise}>Submit</Button>
    </Form>
        )
}
    </ExerciseContext.Consumer>
  );
}

export default ExerciseForm;