//import liraries
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screen/Home/HomeScreen";
import Test from "./Test";
import TabNavigator from "./TabNavigator";
import ComplaintRegister from "../Screen/Modules/ComplaintMgmnt/ComplaintRegister";

// create a component
const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
      }}
    >
      <Stack.Screen name="HomeStack" component={TabNavigator} />
      <Stack.Screen name="ComplaintRegister" component={ComplaintRegister} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default HomeStack;
