import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
   return (
      <View style={styles.row}>
         <View style={styles.quantityContainer}>
            <Text>1</Text>
         </View>
         <Text style={styles.name}>{basketDish.name}</Text>
         <Text style={styles.itemPrice}>${basketDish.price}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   title: {
      fontSize: 24,
      fontWeight: "600",
      marginVertical: 10,
   },

   row: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
   },

   quantityContainer: {
      backgroundColor: "lightgrey",
      paddingHorizontal: 5,
      paddingVertical: 2,
      marginRight: 10,
      borderRadius: 3,
   },

   name: {
      fontWeight: "600",
   },
});

export default BasketDishItem;
