import React, { useContext } from 'react'
import ExerciseContext from '../../utils/ExerciseContext'
import { Table } from 'reactstrap';


const ExerciseDisplay = () =>{
return (
<ExerciseContext.Consumer>
{
({exercises, getExercises}) =>(

<Table dark>
<thead>
    <tr>
                                 <th><h4>#</h4></th>
                                <th><h4>Exercise</h4></th>
                                <th><h4>Weight</h4></th>
                                <th><h4>Amount</h4></th>
                                <th><h4>Date</h4></th>

    </tr>
</thead>

<tbody onLoad={getExercises}>
    {
        exercises.map( ({_id, name, birthday, weight, number}, i ) =>
        <tr key={_id}>
            <td>{i+1}</td>
            <td>{name}</td>
            <td>{weight}</td>
            <td>{number}</td>
            <td>{birthday}</td>

        </tr>
        
        )
    }

</tbody>

</Table>

)
}
</ExerciseContext.Consumer>

)


}

export default ExerciseDisplay