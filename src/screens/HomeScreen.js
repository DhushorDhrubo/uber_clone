import React from 'react';
import { View } from 'react-native';
import CovidMessages from '../components/CovidMessages';
import HomeMap from '../components/HomeMap';
import HomeSearch from '../components/HomeSearch';
function HomeScreen() {
  return (
    <View>
      <HomeMap />
      {/* Covid Msg */}
      <CovidMessages />
      {/* Bottom Component */}
      <HomeSearch/>
    </View>
  );
}
export default HomeScreen;
