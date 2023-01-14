//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import HeaderMain from "../../Components/HeaderMain";
import { bgColor } from "../../Constant/Colors";
import { Card, Button, Title, Switch } from 'react-native-paper';
import SettingsCmp from "./SettingsCmp";

// create a component
const Settings = ({ navigation }) => {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


  return (
    <SafeAreaView style={styles.container} >
      {/* Header Component */}
      <HeaderMain navigation={navigation} />

      <ScrollView>
        <View style={{ flex: 1, padding: 5 }} >
          <SettingsCmp title={"Push Notification"} />
          <SettingsCmp title={"Local Notification"} />
          <SettingsCmp title={"Camera Access Permission"} />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor.mainBgColor,
    flex: 1,
  },

});

//make this component available to the app
export default Settings;
