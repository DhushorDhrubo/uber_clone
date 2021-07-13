import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMap from "../components/HomeMap";
import UberTypes from "../components/UberTypes";

export default function SearchResult() {
  return (
    <View>
      <HomeMap/>
      <UberTypes/>
    </View>
  );
}

const styles = StyleSheet.create({});
