import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text>  go to compoenent</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text>  Image screen</Text>
      </TouchableOpacity>
      <Button title='go to list' onPress={() => navigation.navigate('List')} />
      <Button title="go to counter screen " onPress={() => navigation.navigate('Counter')} />
      <Button title="go to Color screen " onPress={() => navigation.navigate('Color')} />
      <Button title="go to Square screen " onPress={() => navigation.navigate('Square')} />
      <Button title="go to text screen " onPress={() => navigation.navigate('Text')} />
      <Button title="go to Box screen " onPress={() => navigation.navigate('Box')} />
      <Button title="go to Example screen " onPress={() => navigation.navigate('Example')} />

    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
