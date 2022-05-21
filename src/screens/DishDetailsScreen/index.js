import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import { useState } from "react";
const dish = restaurants[0].dishes[0];

export default function DishDetailsScreen() {
   const [quantity, setQuantity] = useState(1);

   const onMinus = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      }
   };

   const onPlus = () => {
      setQuantity(quantity + 1);
   };

   const getTotal = () => {
      return (dish.price * quantity).toFixed(2);
   };

   return (
      <View style={styles.page}>
         <Text style={styles.title}>{dish.name}</Text>
         <Text style={styles.description}>{dish.description}</Text>
         <View style={styles.separator} />

         <View style={styles.row}>
            <AntDesign
               name="minuscircleo"
               size={60}
               color={"black"}
               onPress={() => onMinus()}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <AntDesign
               name="pluscircleo"
               size={60}
               color={"black"}
               onPress={() => onPlus()}
            />
         </View>
         <View style={styles.btn}>
            <Text style={styles.btnText}>
               Add {quantity} {quantity > 1 ? "items" : "item"} to basket
               &#8226; ${getTotal()}
            </Text>
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
      fontSize: 30,
      fontWeight: "600",
      marginVertical: 10,
   },
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
      justifyContent: "center",
      marginTop: 50,
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
});
