import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default: return state
    }
}
const CounterScreen = () => {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View>

            <Button title="increnment"
                // onPress={() => { setCounter(counter + 1) }} 
                onPress={() => dispatch({ type: 'increment' })}
            />
            <Button title="decrement"
                // onPress={() => { setCounter(counter - 1) }}
                onPress={() => dispatch({ type: 'decrement' })}
            />
            <Text>Current Count: {state.count}</Text>
        </View>
    )
}

export default CounterScreen