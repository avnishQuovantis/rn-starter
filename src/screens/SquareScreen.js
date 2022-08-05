import { View, Text } from 'react-native'
import React, { useReducer, useState } from 'react'
import ColorCounter from '../components/ColorCounter'

const Color_Increment = 15
const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return (state.red + action.payload > 255 || action.payload + state.red < 0) ? state : { ...state, red: state.red + action.payload }
        case 'green':
            return (state.green + action.payload > 255 || action.payload + state.green < 0) ? state : { ...state, green: state.green + action.payload }
        case 'blue':
            return (state.blue + action.payload > 255 || action.payload + state.blue < 0) ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state
    console.log(red, " - ", green, " - ", blue);
    return (
        <View>
            <ColorCounter color='red'
                onIncrease={() => { dispatch({ type: 'red', payload: Color_Increment }) }}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * Color_Increment })} />
            <ColorCounter color='green'
                onIncrease={() => dispatch({ type: 'green', payload: Color_Increment })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * Color_Increment })} />

            <ColorCounter color='blue'
                onIncrease={() => dispatch({ type: 'blue', payload: Color_Increment })}
                onDecrease={() => dispatch({ type: "blue", payload: -1 * Color_Increment })} />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}></View>
        </View>
    )
}

export default SquareScreen