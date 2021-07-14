import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function DestinationSearch() {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn("Redirect to results");
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* From */}

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetails | null = null
          ) => {
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: ' google API key required',
            language: 'en',
          }}
        />

        {/* WHere to */}
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetails | null = null
          ) => {
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAkPjfnUZNi_6G8H90EM-LsH3q0gXa4KQA',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#eee",
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});
