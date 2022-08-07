import React, { useContext } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Context } from '../../context/langContext';
import tw from "tailwind-react-native-classnames";

export default function ToggleLangs() {

    const { toggleLang } = useContext(Context);


    return (
        <View
            style={[tw`flex-row bg-black text-center `]}>
            <View
                style={[tw`flex-1 mx-14 rounded `]}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => toggleLang('EN')}>
                    <Image
                   style={{width:70, height: 70}}
                        source={require('../../assets/images/en_flag.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={[tw`flex-1 rounded  `]}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => toggleLang('FR')}>
                    <Image
                     style={{width: 70, height: 70}}
                        source={require('../../assets/images/fr_flag.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>);
}
