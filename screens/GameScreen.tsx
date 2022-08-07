import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { lockAsync, OrientationLock } from "expo-screen-orientation";
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Context } from '../context/langContext';
import data from '../assets/data';

export default function GameScreen({ route, navigation }: any) {

    useEffect(() => {
        lockAsync(OrientationLock.PORTRAIT);
        return () => {
            lockAsync(OrientationLock.DEFAULT);
        };
    }, []);

    const { lang }: String = useContext(Context)
    const text = data[lang];

    const selectedNumber = route.params.selectedNumber;

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(99);
    const [guess, setGuess] = useState(
        Math.floor(Math.random() * (end - start)) + start
    );
    const [numberOfGuesses, setNumberOfGuesses] = useState(1);

    const handleLessPress = () => {
        if (guess <= selectedNumber) {
            Alert.alert("😡😡😡", text.game_error_wrong, [
                { text: "Ok", style: "destructive" },
            ]);
            return;
        }

        setEnd(guess - 1);
        setGuess(
            (lastGuess) =>
                Math.floor(Math.random() * (lastGuess - 1 - start)) + start
        );
        setNumberOfGuesses((lastValue) => lastValue + 1);
    };

    const handleGreaterPress = () => {
        if (guess >= selectedNumber) {
            Alert.alert("😡😡😡", text.game_error_wrong, [
                { text: "Ok", style: "destructive" },
            ]);
            return;
        }

        setStart(guess + 1);
        setGuess(
            (lastGuess) =>
                Math.floor(Math.random() * (end - lastGuess + 1)) + lastGuess
        );
        setNumberOfGuesses((lastValue) => lastValue + 1);
    };

    let ConfirmNum = () => {
        return (
            <View style={[tw`border-2 w-10/12 mx-auto mt-2 py-3 rounded-2xl`]}>
                <Text
                    style={[tw`mt-2 text-xl text-center w-10/12 mx-auto`]}>
                    {text.startGame_titleSelectShow}
                </Text>
                <View style={[tw`items-center justify-center mt-2`]}>
                    <Text
                        style={[
                            tw`border-2 text-center rounded-xl text-2xl text-red-400 border-red-400 p-4`,
                        ]}>
                        {selectedNumber}
                    </Text>
                </View>
            </View>
        );
    };

    useEffect(() => {
        if (guess === selectedNumber) {
            navigation.navigate('GameOverScreen')
        }
    }, [guess]);

    return (
        <View style={[tw`flex-1 mt-10`]}>
            <Text style={[tw`text-xl text-white text-center`]}>
                {text.game_title1}
            </Text>
            <View style={[tw`items-center justify-center mt-4`]}>
                <Text
                    style={[
                        tw`border-2 text-center rounded-xl text-2xl text-red-400 border-red-400 p-4`,
                    ]}>
                    {guess}
                </Text>
            </View>
            <Text style={[tw`text-xl text-white text-center mt-4`]}>
                {text.game_title2}
            </Text>
            <View style={[tw`flex-row flex-wrap justify-center`]}>
                <View style={[tw`w-1/3 mx-1 mt-4 rounded-xl`]}>
                    <Button onPress={handleLessPress} title={text.game_butLess} />
                </View>
                <View style={[tw`w-1/3 mx-1 mt-4 rounded-xl`]}>
                    <Button
                        onPress={handleGreaterPress}
                        title={text.game_butGreater}
                        color="#aF2111"
                    />
                </View>
            </View>

            <ConfirmNum />
        </View>
    );
}
