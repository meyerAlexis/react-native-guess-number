import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import HeaderApp from '../components/HeaderApp';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

import traductions from "../assets/data";
import { Context } from '../context/langContext';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  
  const { lang }: any = useContext(Context);
  const text: any = traductions[lang];

  return (
    <View style={styles.container}>
      <HeaderApp/>
      <Text style={styles.title}>{text.nofound_title}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>{text.nofound_link_title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
