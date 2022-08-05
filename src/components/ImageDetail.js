import React from 'react';
import { Text, StyleSheet, View, Button, Image, } from 'react-native';

const ImageDetail = (props) => {
    // console.log(props);
    return (
        <View>
            <Image source={props.imageSource}></Image>
            <Text >{props.title}</Text>
            <Text>Image scores - {props.scores}</Text>

        </View>)
};

const styles = StyleSheet.create({

});

export default ImageDetail;
