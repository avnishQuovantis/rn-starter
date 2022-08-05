import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {

    const friends = [
        { name: "friend1", key: "1", age: 23 },
        { name: "friend2", key: "2", age: 24 },
        { name: "friend3", key: "3", age: 21 },
        { name: "friend4", key: "4", age: 26 },
        { name: "friend5", key: "5", age: 28 },
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // element={item:{name:"friend1",index:0}
                return <Text style={styles.textStyle}>{item.name} -  Age {item.age}</Text>
            }}></FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: { marginVertical: 20, borderWidth: 1, borderColor: 'black', padding: 1, }
})
export default ListScreen