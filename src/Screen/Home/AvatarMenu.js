//import liraries
import React, { Component, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { windowWidth } from '../../utils/Dimentions';
import { Avatar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { bgColor, fontColor } from '../../Constant/Colors';

// create a component
const AvatarMenu = ({ navigation, mainTitle, icon, iconColor, avatarColor, routeName }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
        >
            <View style={{
                // backgroundColor: 'green',
                minWidth: windowWidth < 400 ? 80 : 100,
                maxWidth: windowWidth < 400 ? 80 : 100,
                minHeight: windowWidth < 400 ? 85 : 100,
                maxHeight: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: windowWidth < 400 ? 3.5 : 6.5,
                // backgroundColor: 'blue'

            }} >
                <Avatar.Icon
                    size={windowWidth < 400 ? 50 : 60}
                    icon={() => <MaterialIcons
                        name={icon}
                        size={windowWidth < 400 ? 30 : 32}
                        color={iconColor}
                    />}
                    style={{ backgroundColor: avatarColor }}
                />
                <View style={{
                    // backgroundColor: 'white'
                }} >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Text style={styles.textStyle} >{mainTitle}</Text>
                        <Text style={styles.textStyle} >Management</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    textCardFont: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 15,
        margin: 5,
        color: fontColor.inActiveFont
    },
    menuContainer: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
        // backgroundColor: 'green'
        // minHeight: windowHeight,
        // maxHeight: windowHeight,
    },
    textStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 10,
        fontWeight: '400',
        color: bgColor.statusbar
    },
});

//make this component available to the app
export default memo(AvatarMenu);
