//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Test = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({

            tabBarStyle: { display: 'none' }
        });
    }, [navigation]);
    // navigation.setOptions({ tabBarStyle: { display: 'none' } });
    return (
        <View style={styles.container}>
            <Text>Test</Text>
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
export default Test;
