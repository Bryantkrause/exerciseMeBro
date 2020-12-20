import React from 'react'
import ExerciseContext from '../../utils/ExerciseContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ExerciseForm = () => {
  return (
    <ExerciseContext.Consumer>
      {
        ({}) => (
    <Form>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exercise">Exercise</Label>
            <Input type="text" name="exercise" id="exercise" placeholder="super cool exercise" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="amount">Amount</Label>
            <Input type="number" name="amount" id="amount" placeholder="5" />
          </FormGroup>
        </Col>
      </Row>
      <Col md={3}>
      <FormGroup>
        <Label for="weight">Weight</Label>
        <Input type="number" name="weight" id="weight" placeholder="999"/>
      </FormGroup>
      </Col>
      <Button>Submit</Button>
    </Form>
        )
}
    </ExerciseContext.Consumer>
  );
}

export default ExerciseForm;