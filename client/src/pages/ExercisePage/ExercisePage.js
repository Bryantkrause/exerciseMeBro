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
  exercise: '',
  weight: '',
  exercises: [],
  handleInputChange: e => {
      console.log(e.target)
      this.setState({[e.target.name]: e.target.value})
  },
  handleAddExercise: e => {
      e.preventDefault()
      console.log(e)
      axios.post('/exercise', {
          name: this.state.name,
          number: this.state.number,
          weight: this.state.weight
      })
      .then(({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.exercises))
          arr.push(data)
          this.setState({exercises: arr})
      })
  },
  handleToggleExercise: () => {},
  getExercise: () => {
      console.log('pumping iron')
      axios.get('/exercises')
      .then (e =>{
          console.log('exercises recieved')
      })
      .catch(e => console.error('no exercise for you', e))
  },
  handleRemoveExercise: _id => {
    console.log(_id)
    axios.delete(`/exercise/${_id}`,)
    .then( r => {
      axios.get('/exercises')
      .then( ({data}) => this.setState({ exercises: data }))
      console.log('data deleted')
      console.log(this.state)
    })
    .catch(e => console.error('cant delete', e))
  }
}

componentDidMount() {
    axios.get('/exercises')
    .then(({data}) => this.setState({ exercises: data}))
}

render () {
    return (
        <ExerciseContext.Provider value={this.state}>
            <ExerciseForm/>
            <ExerciseDisplay/>
        </ExerciseContext.Provider>
    )
}
}

export default Exercises