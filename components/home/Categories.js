import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
];

export default function Categories() {
  return (
    <View style={styles.view_container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", margin: 30 }}>
            <Image style={styles.category_img} source={item.image} />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category_img: { width: 30, height: 20, resizeNode: "contain" },
  view_container: {
    marginTop: 4,
    backgroundColor: "#fff",
    paddingVertical: 1,
    paddingLeft: 5,
  },
});
