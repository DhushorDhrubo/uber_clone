import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CovidMessages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#1065e9',
      padding:15,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
  },
  title: {
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      marginBottom:10,
  },
  text: {
      color:'#bed9ff',
      fontSize:15,
  },
  learnMore: {
      color:'#fff',
      fontSize:15,
      fontWeight:'bold',
  },
});
