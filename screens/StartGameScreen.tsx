import React, { useContext, useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Context } from "../context/langContext";
import tw from "tailwind-react-native-classnames";

import HeaderApp from "../components/HeaderApp";
import traduction from "../assets/data";


export default function StartGameScreen({ route, navigation }: any) {

  const { lang }: any = useContext(Context)
  const text: any = traduction[lang];

  const [step, setStep] = useState(0);

  const load = () => {
    if (step > 1) {
      handleResetButtonPress()
    }
  }

  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleResetButtonPress = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handleConfirmButtonPress = () => {
    setStep(1)
    let numberSelected = parseInt(enteredValue);
    if (isNaN(numberSelected)) {
      Alert.alert(
        text.error_wrong_alert_title,
        text.error_wrong_alert_message,
        [
          {
            text: text.error_wrong_but_text,
            style: text.error_wrong_but_style,
            onPress: handleResetButtonPress,
          },
        ]
      );
      return;
    }
    setSelectedNumber(numberSelected);
    setConfirmed(true);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let AfterConfirming = () => {
    return (
      <View style={[tw`border-2 w-10/12 mx-auto mt-2 py-3 rounded-2xl`]} onLayout={load}>
        <Text
          style={[tw`mt-2 text-xl text-center w-10/12 mx-auto`]}>
          {text.startGame_titleSelectShow}
        </Text>
        <View style={[tw`items-center justify-center mt-2`]}>
          <Text
            style={[tw`border-2 text-center rounded-xl text-2xl text-red-400 border-red-400 p-4`,]}>
            {selectedNumber}
          </Text>
        </View>
        <View
          style={[tw`w-4/6 mx-auto mt-4 rounded-xl overflow-hidden `]}>
          <Button
            title={text.startGame_butValidSelect}
            color="#2277dd"
            onPress={() => {
              setStep(2)
              navigation.navigate('GameScreen', { selectedNumber: selectedNumber });
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
          <View style={[tw`flex-1 mt-10`]}>
            <HeaderApp />
            <Text style={[tw`text-center text-2xl pb-4 text-white`]}>
              {text.startGame_title}
            </Text>
            <View
              style={[tw`border-2 border-gray-600 py-4 w-10/12 mx-auto rounded-xl `]}>
              <View style={[tw``]}>
                <Text style={[tw`text-center text-xl text-white`]}>
                  {text.startGame_selectNum}
                </Text>
                <TextInput
                  value={enteredValue}
                  onChangeText={(value) => {
                    setEnteredValue(value);
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                  style={[tw`text-center text-xl font-semibold mt-4 text-white border-b border-white mx-auto `]}
                />
              </View>
              <View
                style={[tw`flex-row w-4/5 mx-auto justify-between mt-4`]}>
                <View
                  style={[tw`flex-1 mx-1 rounded overflow-hidden`]}>
                  <Button
                    title={text.startGame_butReset}
                    color="#ee2222"
                    onPress={handleResetButtonPress}
                  />
                </View>
                <View
                  style={[tw`flex-1 mx-1 rounded overflow-hidden`]}>
                  <Button
                    disabled={confirmed ? true : false}
                    title={text.startGame_butValidate}
                    color="#22aaff"
                    onPress={handleConfirmButtonPress}
                  />
                </View>
              </View>
            </View>
            {confirmed && <AfterConfirming />}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}


