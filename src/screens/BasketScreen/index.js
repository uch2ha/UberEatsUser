import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useState } from "react";
const restaurant = restaurants[0];

export default function BasketScreen() {
   return (
      <View style={styles.page}>
         <Text style={styles.title}>{restaurant.name}</Text>

         <Text style={styles.subTitle}>Your items</Text>

         <FlatList
            data={restaurant.dishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} />}
         />

         <View style={styles.separator} />

         <View style={styles.btn}>
            <Text style={styles.btnText}>Crate order</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   page: {
      flex: 1,
      width: "100%",
      paddingVertical: 40, // temp fix
      padding: 10,
   },
   title: {
      fontSize: 24,
      fontWeight: "600",
      marginVertical: 10,
   },
   subTitle: { fontWeight: "bold", marginTop: 20, fontSize: 19 },
   description: {
      color: "grey",
   },
   separator: {
      height: 1,
      backgroundColor: "lightgrey",
      marginVertical: 10,
   },
   row: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
   },
   itemPrice: {
      marginLeft: "auto",
   },
   quantityContainer: {
      backgroundColor: "lightgrey",
      paddingHorizontal: 5,
      paddingVertical: 2,
      marginRight: 10,
      borderRadius: 3,
   },
   quantity: {
      fontSize: 25,
      fontWeight: "500",
      marginHorizontal: 15,
   },
   btn: {
      backgroundColor: "black",
      marginTop: "auto",
      padding: 20,
      alignItems: "center",
      borderRadius: 10,
   },
   btnText: {
      color: "white",
      fontWeight: "600",
      fontSize: 20,
   },
   name: {
      fontWeight: "600",
   },
});
