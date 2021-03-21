import React from 'react'
import axios from 'axios'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseForm from '../../components/ExerciseForm'
import ExerciseDisplay from '../../components/ExerciseDisplay'

class Exercises extends React.Component {
state = {
  name: '',
  number: '',
  birthday: '',
  weight: '',
  data: '',
  exercise: '',
  exercises: [],
  inputChange: e => { 
    this.setState({[e.target.name]: e.target.value})
},
  renderChart: () => {},
  exerciseSubmit: e => {
      e.preventDefault()
      axios.post('/exercise', {
        name: this.state.name,
        number: this.state.number,
        weight: this.state.weight,
        exercise: this.state.exercise
      })
      .then(({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.exercises))
          arr.push(data)
          this.setState({exercises: arr, name: '',number: '',weight: ''})
      })
  },
  getExercises: () => {
      console.log('lets get them excercises')
      axios.get('/exercises')
      .then(({data}) =>{
        let arr = JSON.parse(JSON.stringify(this.state.exercises))
        arr = data
        this.setState({exercises: arr})
      })
  },
  handleRemoveExercise: () => {}

  
}
componentDidMount() { // When the page loads grab the data from the database and update the exercises array
  axios.get('/exercises')
    .then( ({data}) => this.setState({ exercises: data }))
}

render () {
    return (
        <ExerciseContext.Provider value={this.state}>
            <div className="container">
            <ExerciseForm/>
            <ExerciseDisplay/>
            </div>

        </ExerciseContext.Provider>
    )
}

}

export default Exercises