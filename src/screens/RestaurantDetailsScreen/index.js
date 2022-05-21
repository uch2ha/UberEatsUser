import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
   const route = useRoute();
   const navigation = useNavigation();

   const id = route.params.id;

   return (
      <View style={styles.page}>
         <StatusBar style="light" />

         <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />}
            data={restaurant.dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
         />
         <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back-circle"
            size={45}
            color="white"
            style={styles.iconContainer}
         />
      </View>
   );
};

export default RestaurantDetailsPage;
