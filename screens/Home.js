import { Divider } from "@rneui/themed/dist/Divider";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";

import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
const token = "token here";

function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");
  const HomeScreen = () => (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">HOME</Text>
    </Layout>
  );
  const getRestaurants = () => {
    const apiurl = "url/api endpoint";

    const apiOptins = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(apiurl, apiOptins)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.bussiness));
  };

  // with delivery of pick up filter
  const delivery_or_pick_getRestaurants = () => {
    const apiurl = "url/api endpoint";

    const apiOptins = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(apiurl, apiOptins)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.bussiness.fliter((bussiness) =>
            bussiness.transaction.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurants();
  }, [city, activeTab]);

  console.log(city);
  return (
    <SafeAreaView style={styles.safe_container}>
      <View style={styles.container}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar city_handler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  safe_container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  container: {
    backgroundColor: "white",
    padding: 15,
  },
});
