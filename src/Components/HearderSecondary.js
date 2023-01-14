//import liraries
import React, { memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { bgColor, fontColor, iconColor } from "../Constant/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { windowWidth } from "../utils/Dimentions";
// create a component
const HearderSecondary = ({ navigation, name, goBackButton }) => {
    return (
        <View>
            <StatusBar
                animated={false}
                backgroundColor={bgColor.statusbar}
                barStyle="default"
            />
            <View style={styles.headerStyleCmp}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="reorder" size={25} color={iconColor.main} />
                </TouchableOpacity>
                <View style={{
                    display: 'flex',
                    flex: 1,
                    paddingLeft: 10,
                    flexDirection: 'row'
                }} >
                    {/* <Text>Login as : </Text> */}
                    <Text style={styles.userName}>{name}</Text>
                </View>
                {
                    goBackButton === true ?
                        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                            <MaterialIcons name="reply" size={25} color={iconColor.main} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="home" size={25} color={iconColor.main} />
                        </TouchableOpacity>
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageBgCmp: {
        height: 35,
        width: 35,
    },
    headerStyleCmp: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        backgroundColor: bgColor.headerBar,
        padding: 20,
        alignItems: "center",
    },
    userName: {
        fontSize: windowWidth < 400 ? 15 : 20,
        fontFamily: "Roboto_500Medium",
        color: fontColor.main,
        textTransform: 'capitalize'
    },
});

//make this component available to the app
export default memo(HearderSecondary);
