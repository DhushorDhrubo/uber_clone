import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeSearch() {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.time}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>
      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
      {/* Home Address */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={'home'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#434343',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#dbdbdb",
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
  },
});
