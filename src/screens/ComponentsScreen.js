import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "avnish"
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with react native</Text>
      <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>)
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 20
  },
  headerStyle: {
    fontSize: 40
  }

})
export default ComponentsScreen