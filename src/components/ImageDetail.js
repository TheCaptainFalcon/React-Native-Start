import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imgSrc, imgScore, title }) => {
    // console.log(props)
    return (
        <View>
            <Image source={ imgSrc } />
            <Text>Image Score - { imgScore }</Text>
            <Text>{ title }</Text>
        </View>
       
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;
