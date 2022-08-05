import { View, TextInput, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)} />
      {/* <Text>Your name is {name}</Text> */}
      {name.length < 4 && <Text>Enter password more than 5</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2
  }
})
export default TextScreen