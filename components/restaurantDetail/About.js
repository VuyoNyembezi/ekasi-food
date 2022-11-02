import { Text, View, Image } from "react-native";
import React from "react";

const image =
  "https://lh3.googleusercontent.com/p/AF1QipP2DYO1BLk68UaGw9ndnVetX1tIIMdQnuMnvEWh=w1080-h608-p-no-v0";
const title = "Pedros Chicken";
const description = "Chicken - Comfort Food - RR - 4 star(2345+)";
export default function About() {
  return (
    <View>
      <Restaurantimage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const Restaurantimage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
