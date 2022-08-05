import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ExampleScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <Text style={styles.childOneStyle}>Child #1</Text>
            <Text style={styles.childTwoStyle}>Child #2</Text>
            <Text style={styles.childThreeStyle}>Child #3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    childOneStyle: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    childTwoStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'
    },
    childThreeStyle: {
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }
})
export default ExampleScreen