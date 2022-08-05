import React from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = ({ navigation }) => {
    // console.log(props);
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} scores='10' />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} scores='8' />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} scores='9' />


        </View>)
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ImageScreen;
