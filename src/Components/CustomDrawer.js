import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { bgColor, fontColor } from "../Constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../Redux/Constants/action.type";
// create a component
const CustomDrawer = (props) => {
  const [useName, setUserName] = useState('');
  const [department, setDepartment] = useState('');

  const { FETCH_LOGIN_INFORMATION } = ActionType;

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.loginFuntion);
  const loggedUserDetl = useMemo(() => userInfo, [userInfo]);

  useEffect(() => {
    const { emp_name, emp_id, emp_no, emp_sec } = loggedUserDetl.loginDetl;
    setUserName(emp_name)
    setDepartment(emp_sec)
  }, [loggedUserDetl])


  const logOut = async () => {
    dispatch({
      type: FETCH_LOGIN_INFORMATION,
      payload: {
        token: null,
        data: {},
        loadingStatus: false,
        message: "",
      },
    });

    AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: bgColor.mainBgColor,
          margin: 0,
        }}
      >
        <ImageBackground
          source={require("../../assets/images/bgImage2.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../../assets/images/image4.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: fontColor.mainBlue,
              fontSize: 18,
              fontWeight: "900",
              textTransform: 'capitalize'
              //   fontFamily: "Roboto_500Medium",
            }}
          >
            {useName.toLowerCase()}
          </Text>
          <Text
            style={{
              color: fontColor.mainBlue,
              fontSize: 18,
              fontWeight: "900",
              textTransform: 'capitalize'
              //   fontFamily: "Roboto_500Medium",
            }}
          >
            {department.toLowerCase()}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, paddingTop: 10, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: bgColor.ligthBluish,
        }}
      >
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={fontColor.mainBlue}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                fontWeight: "600",
                color: fontColor.mainBlue,
              }}
            >
              Accounts
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logOut();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="exit-outline"
              size={22}
              color={fontColor.mainBlue}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                fontWeight: "600",
                color: fontColor.mainBlue,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default CustomDrawer;
