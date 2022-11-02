import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Mnyandu Bar",
    image_url:
      "https://lirp.cdn-website.com/222cb1f2/dms3rep/multi/opt/shutterstock_117997954-640w.jpg",
    categories: ["Cafe", "Bar"],
    price: "RR",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Mashu Bar",
    image_url:
      "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/ad4d2bdf-d8fa-4a7d-a59b-622efd7faf85/f9eaf1b3-876f-4a47-90ec-f42a56dd829e.jpg",
    categories: ["Cafe", "Bar"],
    price: "RR",
    reviews: 750,
    rating: 2.5,
  },
  {
    name: "Ekasi Bar",
    image_url:
      "https://www.capetownmagazine.com/media_lib/preview/7ca00c9612ef0f94952501d8272614bc.preview.jpg",
    categories: ["Cafe", "Bar"],
    price: "RR",
    reviews: 200,
    rating: 3.5,
  },
];

export default function RestaurantItems(props) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ marginBottom: 30, margin: 5 }}
      >
        {props.restaurantsData.map((restaurant, index) => (
          <View key={index} style={{ marginTop: 10, backgroundColor: "white" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        ))}
      </TouchableOpacity>
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 - min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 35,
        width: 35,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
