import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import data from "../assets/data";
import { Context } from "../context/langContext";

export default function GameOverScreen({ navigation }: any) {
  
  const { lang }: String = useContext(Context)
  const text = data[lang];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text.gameOver_title}</Text>
      <View style={[tw`w-1/3 mx-1 mt-4 rounded-xl overflow-hidden`]}>
      <Button
        title={text.gameOver_butPlayAgain}        
        color="#2277dd"
        onPress={() => navigation.navigate('Root')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});