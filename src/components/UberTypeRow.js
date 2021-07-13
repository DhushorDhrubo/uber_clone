import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UberTypesRow({type}) {
  
  const getImage = () => {
    return (
      type.type === 'UberX' ?  require('../assets/images/UberX.jpeg') 
    : type.type ==='Comfort' ?  require('../assets/images/Comfort.jpeg')
    :  require('../assets/images/UberXL.jpeg'))
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />
      <View style={styles.middleContainer}>
          <Text style={styles.type}>{type.type} {' '}
          <Ionicons name={'person'} size={16}/>
          3
          </Text>
          <Text style={styles.time}>
            8:03PM drop off
          </Text>
      </View>
      
      <View style={styles.rightContainer}>
          <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
          <Text style={styles.price}>
              est. ${type.price}
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20,
    backgroundColor:'#fff'

  },
  middleContainer: {
    flex:1,
    marginHorizontal:10,
  },
  rightContainer: {
    width:100,
    justifyContent:"flex-end",
    flexDirection:"row",
  },
  image: {
    height:70,
    width:80,
    resizeMode:"contain",
  },
  price:{
    fontWeight:"bold",
    fontSize:15,
    marginLeft:5,
  },
  time:{
    color:'#5d5d5d',
  },
  type:{
    fontWeight:"bold",
    fontSize:18,
    marginBottom:5,
  },
});
