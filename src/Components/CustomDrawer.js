import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colorTheme } from "../Constant/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { PowerIcon } from 'react-native-heroicons/outline'
import { clearLoggedInformation } from "../Redux/ReduxSlice/LoginSLice";
// create a component
const CustomDrawer = (props) => {
  const [useName, setUserName] = useState('');
  const [department, setDepartment] = useState('');

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.loginFuntion.loginInfo);
  const loggedUserDetl = useMemo(() => userInfo, [userInfo]);

  useEffect(() => {
    const { emp_name, emp_sec } = loggedUserDetl.loginDetl;
    setUserName(emp_name)
    setDepartment(emp_sec)
  }, [loggedUserDetl])


  const logOut = async () => {
    dispatch(clearLoggedInformation());
    AsyncStorage.clear();
  };

  return (
    // <View style={styles.container}>
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        flex: 1,
      }}
      style={{
        backgroundColor: 'red'
      }}
    >
      <ImageBackground
        source={require("../../assets/images/bgImageNewTheme.png")}
        style={{ padding: 5, flex: 1, opacity: 1, marginTop: -4 }}
      // resizeMode='repeat'
      >
        <View style={{ flex: 1, }} >
          <Text
            style={{
              color: colorTheme.fontColor,
              fontSize: 18,
              textTransform: 'capitalize',
              fontFamily: "Roboto_500Medium",
            }}
          >
            {useName?.toLowerCase()}
          </Text>
          <Text
            style={{
              color: colorTheme.fontColor,
              fontSize: 18,
              textTransform: 'capitalize',
              fontFamily: "Roboto_700Bold",
            }}
          >
            {department?.toLowerCase()}
          </Text>

          <ScrollView
            style={{ flex: 1, }}
            contentOffset={{ x: 5, y: 5 }}
            showsVerticalScrollIndicator={false}
          >
            <DrawerItemList {...props} />
          </ScrollView>
          <View
            className="flex flex-row bg-[#454762] h-12 rounded-t-full rounded-b-full justify-center items-center"
          >
            <TouchableOpacity
              className="flex flex-row"
              onPress={logOut}
            >
              <Text
                className="flex mr-2"
                style={{
                  fontSize: 18,
                  fontFamily: "Roboto_300Light",
                  color: "white"
                }}
              >Logout</Text>
              <View className="font-extrabold"  >
                <PowerIcon size={22} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </DrawerContentScrollView >
  );
};

// define your styles
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});

//make this component available to the app
export default CustomDrawer;
