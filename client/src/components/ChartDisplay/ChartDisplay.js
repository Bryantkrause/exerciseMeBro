import React from 'react'
import ExerciseContext from '../../utils/ExerciseContext'
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const ChartDisplay = () => {
    return(
        <ExerciseContext.Consumer>
                <VictoryChart>


                </VictoryChart>
        </ExerciseContext.Consumer>
    )
}

export default ChartDisplay;

