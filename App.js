/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import {StatusBar} from 'react-native';
import SearchResult from './src/screens/SearchResult';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch/> */}
      <SearchResult/>
    </>
  );
};

export default App;
