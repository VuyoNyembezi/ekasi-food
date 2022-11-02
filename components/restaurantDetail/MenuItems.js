import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

const foods = [
  {
    title: "Burgers",
    description:
      "just chicken that we sell and it comes with sides and sides can be more than one thank you bye",
    price: "R100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_gZLnP--aMBdfspKeP5kAQDahZhNTckQRw&usqp=CAU",
  },
  {
    title: "Chips",
    description:
      "just chicken that we sell and it comes with sides and sides can be more than one thank you bye",
    price: "R150",
    image:
      "https://benonicitytimes.co.za/wp-content/uploads/sites/26/2022/06/lakefield-flyer-780x470.jpg",
  },
  {
    title: "Chicken Platter",
    description:
      "just chicken that we sell and it comes with sides and sides can be more than one thank you bye",
    price: "80",
    image:
      "https://hungryforhalaal.co.za/wp-content/uploads/2021/12/Pedros-Boksburg-Hungryforhalaal1.jpg",
  },
  {
    title: "Full Chicken",
    description:
      "just chicken that we sell and it comes with sides and sides can be more than one thank you bye",
    price: "R100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPycstVqhR9iafxz7jLp5IGjCVD9519-V3MQ&usqp=CAU",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <View>
      <View style={styles.menuItemStyle}>
        <FoodInfo food={foods[0]} />
        {/* <FoodImage food={foods[0]} /> */}
      </View>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, heigh: 100, borderRadius: 8 }}
    />
  </View>
);
