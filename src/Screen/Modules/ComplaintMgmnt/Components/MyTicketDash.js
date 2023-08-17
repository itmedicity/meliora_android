//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colorTheme } from '../../../../Constant/Colors';
import { ClipboardDocumentCheckIcon, BellAlertIcon } from 'react-native-heroicons/outline'
import MyDashLabel from './MyDashLabel';

// create a component
const MyTicketDash = () => {
    return (
        <View
            className='flex flex-col rounded-2xl p-2 mb-4'
            style={{
                backgroundColor: colorTheme.secondaryBgColor,
                overflow: 'hidden',
                elevation: 3
            }}>
            <MyDashLabel />
            <MyDashLabel />
            <MyDashLabel />
            <MyDashLabel />
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
export default MyTicketDash;
