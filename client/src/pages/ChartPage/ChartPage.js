import React, { Component } from 'react';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, AreaSeries} from 'react-vis';
import ExerciseContext from '../../utils/ExerciseContext'


class Charts extends Component {
state = {
  name: '',
  number: '',
  birthday: '',
  data: '',
  exercise: '',
  weight: '',
  exercises: [],
  
  renderChart: () => {
    console.log(this.exercises)
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
      
    ]}}

  
    
    render() {
      console.log(this.data)
    return (
      <ExerciseContext.Provider value={this.state}>
      <div className="App">
        <XYPlot height={300} width={300}>
          <AreaSeries data={this.data} />
        </XYPlot>
      </div>
      </ExerciseContext.Provider>
    );
  }
}


export default Charts;