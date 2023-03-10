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

// create a component
const HeaderMain = ({ navigation, name }) => {

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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require("../../assets/images/image3.jpg")}
            style={styles.imageBgCmp}
            imageStyle={{ borderRadius: 10 }}
          />
        </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
    color: fontColor.main,
    textTransform: 'capitalize'
  },
});

//make this component available to the app
export default memo(HeaderMain);
