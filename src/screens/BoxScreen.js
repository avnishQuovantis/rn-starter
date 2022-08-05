import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        position: 'relative'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2,
        alignSelf: "center"
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // position: 'absolute',
        // top: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject
    }
})

export default BoxScreen