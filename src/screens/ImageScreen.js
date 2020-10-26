import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imgSrc={require('../../assets/forest.jpg')} 
                imgScore={9}
            />
            <ImageDetail 
                title="Beach" 
                imgSrc={require('../../assets/beach.jpg')}
                imgScore={8}
            />
            <ImageDetail 
                title="Mountain" 
                imgSrc={require('../../assets/mountain.jpg')}  
                imgScore={7}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;
