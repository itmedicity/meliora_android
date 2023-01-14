//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { bgColor } from '../Constant/Colors';

// create a component
const CustomActivityIndicator = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }} >
            <ActivityIndicator color={bgColor.statusbar} size='large' />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CustomActivityIndicator;
