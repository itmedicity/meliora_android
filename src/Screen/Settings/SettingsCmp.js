//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import HeaderMain from "../../Components/HeaderMain";
import { bgColor, fontColor } from "../../Constant/Colors";
import { Card, Button, Title, Switch } from 'react-native-paper';
import { useSelector } from "react-redux";
import _ from "underscore";
// create a component

const SettingsCmp = ({ title }) => {

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const token = useSelector((state) => state.expoPushToken, _.isEqual)

    console.log(token)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <Card mode="contained" style={{ backgroundColor: bgColor.switchColor, marginVertical: 2 }} >
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={styles.TextContainer} >
                    <Text style={styles.textContainText} >{title}</Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                        color="#fa3f7e"
                    />
                </View>
            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    TextContainer: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 15
    },
    textContainText: {
        fontFamily: "Roboto_500Medium",
        fontSize: 15,
        color: fontColor.inActiveFont
    },
    switchContainer: {
        flex: 1,
        // backgroundColor: 'green',
        alignItems: 'center'
    }
});

//make this component available to the app
export default SettingsCmp;
