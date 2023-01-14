import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const AppNav = () => {
  const [userToken, setUserToken] = useState(null);
  const tokenId = useSelector((state) => state.loginFuntion.token);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("@token:");
      const userInfo = await AsyncStorage.getItem("@userInfo:");
      setUserToken(token);
    };
    getToken();
  }, [tokenId]);

  return (
    <NavigationContainer>
      {tokenId === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNav;
