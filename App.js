import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";

export default function App() {
   return (
      <View style={styles.container}>
         <StatusBar style="dark" />
         {/* <HomeScreen /> */}
         {/* <RestaurantDetailsPage /> */}
         <DishDetailsScreen />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      // padding: 15,
      // marginTop: Platform.OS === "android" ? 25 : 0,
   },
});
