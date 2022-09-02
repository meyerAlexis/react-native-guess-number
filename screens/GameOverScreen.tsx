import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import traductions from "../assets/data";
import HeaderApp from "../components/HeaderApp";
import { Context } from "../context/langContext";

export default function GameOverScreen({ navigation }: any) {
  
  const { lang }: any = useContext(Context)
  const text: any = traductions[lang];

  return (
    <View style={styles.container}>
      <HeaderApp/>
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