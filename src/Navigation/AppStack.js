import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screen/Home/HomeScreen";
import Profile from "../Screen/Profile/Profile";
import Settings from "../Screen/Settings/Settings";
import CustomDrawer from "../Components/CustomDrawer";
import { MaterialIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { fontColor } from "../Constant/Colors";
import TabNavigator from "./TabNavigator";
import SettingStack from "./SettingStack";
import HomeStack from "./HomeStack";
import ComplaintRegister from "../Screen/Modules/ComplaintMgmnt/ComplaintRegister";

// create a component
const AppStack = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: fontColor.mainBlue,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: fontColor.mainBlue,
        drawerLabelStyle: {
          marginLeft: -25,
          //   fontFamily: "Roboto_500Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="person" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Complaint Register"
        component={ComplaintRegister}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="person" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="settings" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default AppStack;
