import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
   return (
      <View style={styles.page}>
         <StatusBar style="light" />

         <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />}
            data={restaurant.dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
         />
         <Ionicons
            name="arrow-back-circle"
            size={45}
            color="white"
            style={styles.iconContainer}
         />
      </View>
   );
};

export default RestaurantDetailsPage;
