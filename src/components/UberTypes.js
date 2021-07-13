import React from "react";
import { Pressable, StyleSheet, Text, View,Alert} from "react-native";
import UberTypesRow from "./UberTypeRow";
import typesData from '../assets/data/types';


export default function UberTypes() {
  return (
    <View>
      {typesData.map(type => <UberTypesRow type={type}/> )}
      <Pressable
      style={styles.button}
      onPress={() => Alert.alert('Confirm Uber')}
      >
        <Text style={styles.text}>
          Confirm Uber
        </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
button:{
  backgroundColor:'black',
  padding:10,
  margin:10,
  alignItems:"center",
},
text:{
  color:'white',
  fontWeight:"bold",
},
});
