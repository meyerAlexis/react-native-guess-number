import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import tw from "tailwind-react-native-classnames";
import traductions from "../assets/data";
import { Context } from "../context/langContext";
import { Dimensions } from "react-native";

export default function HeaderApp() {

    const { lang }: any = useContext(Context)
    const text: any = traductions[lang];

    return (
        <View style={[tw`items-center justify-center mx-auto mb-7`]}>
            <View style={styles.hairline} />
            <Text
                style={styles.loginButtonBelowText1}>
                {text.all_header_title}
            </Text>
            <View style={styles.hairline} />
        </View>
    );

}

const styles = StyleSheet.create({
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: Dimensions.get('window').width
    },
    loginButtonBelowText1: {

        fontSize: 28,
        paddingHorizontal: 5,
        alignSelf: 'center',
        color: '#ddd'

    },


});