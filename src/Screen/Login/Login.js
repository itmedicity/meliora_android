//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import SvgLogo from "../../../assets/tmcsvg.svg";
import CustomButtonL1 from "../../Components/CustomButtonL1";
import CustomTextInput from "../../Components/CustomTextInput";
import CustomTextInputWithLabel from "../../Components/CustomTextInputWithLabel";
import { axiosApi } from "../../config/Axiox";
import { bgColor, fontColor } from "../../Constant/Colors";
import { useDispatch, useSelector } from "react-redux";

import { ActionType } from "../../Redux/Constants/action.type";
import CustomModal from "../../Components/CustomModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { FETCH_LOGIN_INFORMATION } = ActionType;
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  // console.log(state);

  const [useCode, setUserCode] = useState("");
  const [passCode, setPassCode] = useState("");
  const [errorMesg, setErrorMesg] = useState(false);

  const IternalServerErr = () => {
    return (
      <View>
        <ActivityIndicator color="red" />
        <Text style={styles.ErrorText}>
          Internal Server Error!! No Network Connnectivity
        </Text>
      </View>
    );
  };

  const onSubmitFun = async (useCode, passCode) => {
    try {
      setErrorMesg(false);
      const loginCred = {
        emp_username: useCode,
        emp_password: passCode,
      };

      const result = await axiosApi.post("/employee/login", loginCred);
      // console.log(result)
      const { success } = result.data;
      if (success === 1) {
        // console.log(result.data);
        const token = await JSON.stringify(result.data.token);
        console.log(token)
        const userInfo = await JSON.stringify(result.data);
        AsyncStorage.setItem("@token:", token);
        AsyncStorage.setItem("@userInfo:", userInfo);

        dispatch({
          type: FETCH_LOGIN_INFORMATION,
          payload: {
            token: result.data.token,
            data: result.data,
            loadingStatus: false,
            message: "Login Successfull",
          },
        });
      } else {
        setModalMessage("User Code Or Passcode is Wrong !!");
        setModalVisible(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMesg(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.rapperView} keyboardShouldPersistTaps="always">
        <CustomModal
          setModal={setModalVisible}
          modalState={modalVisible}
          modalMessage={modalMessage}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.logoView}>
            <SvgLogo height={300} width={300} />
          </View>
          {/* <ActivityIndicator /> */}
          <View>
            <Text style={styles.textStyle}>Login</Text>
            {/* user code feild */}
            <CustomTextInput
              Icon={
                <MaterialIcons
                  name="perm-identity"
                  size={20}
                  color={fontColor.mainBlue}
                  style={{ marginRight: 5 }}
                />
              }
              Placeholder="User Code"
              keyboardType="number-pad"
              value={useCode}
              onChangeTextFn={(text) => setUserCode(text)}
            />

            {/* passcode feild */}
            <CustomTextInputWithLabel
              Icon={
                <MaterialIcons
                  name="lock-outline"
                  size={20}
                  color={fontColor.mainBlue}
                  style={{ marginRight: 5 }}
                />
              }
              InputType="password"
              Placeholder="Password"
              feildButtonLabel="forget?"
              // feildButtonFunction={() => {}}
              value={passCode}
              onChangeTextFn={(text) => setPassCode(text)}
            />

            {/* Login BUtton */}
            <CustomButtonL1
              label="Login"
              buttonFuntion={() => {
                onSubmitFun(useCode, passCode);
              }}
            />

            <Text style={styles.contactText}>
              For User Code Contact HR Department !!
            </Text>
          </View>
          {errorMesg && <IternalServerErr />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logoView: {
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 28,
    color: fontColor.mainBlue,
    marginBottom: 30,
  },
  rapperView: {
    paddingHorizontal: 25,
  },
  contactText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 10,
    color: fontColor.mainBlue,
  },
  ErrorText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 12,
    color: fontColor.errorText,
  },
});

//make this component available to the app
export default Login;
