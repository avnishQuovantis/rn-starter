import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title='Add a color' onPress={() => { setColors([...colors, randomRGB()]) }} />
            {/* <View style={{ height: 100, width: 100, backgroundColor: randomRGB() }}></View> */}
            <FlatList data={colors} keyExtractor={(item) => item} renderItem={({ item }) => {
                return (
                    <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                )
            }} />

        </View>
    )
}

const randomRGB = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({


})
export default ColorScreen


