//import liraries
import React, { memo } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { fontColor } from "../Constant/Colors";

// create a component
const CustomButtonL1 = ({ label, buttonFuntion }) => {
  return (
    <TouchableOpacity onPress={buttonFuntion} style={styles.LoginButton}>
      <Text style={styles.LoginButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: fontColor.mainBlue,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  LoginButtonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: fontColor.main,
  },
});

//make this component available to the app
export default memo(CustomButtonL1);
