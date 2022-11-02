import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ city_handler }) {
  return (
    <View style={styles.search_bar}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDG-Skn5tAFPlpdPll-RwfTeSKGwprpKIg" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          city_handler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "lightgrey",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "lightgrey",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ margin: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search_bar: {
    marginTop: 15,
    flexDirection: "row",
  },
});
