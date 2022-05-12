import { View, Text, Image } from "react-native";
import styles from "./styles";
import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantHeader = ({ restaurant }) => {
   return (
      <View style={styles.page}>
         <Image
            source={{ uri: restaurant.image }}
            style={styles.image}
            resizeMode="cover"
         />
         <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>
               $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
               {restaurant.maxDeliveryTime} minutes
            </Text>
         </View>
         <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Menu</Text>
         </View>
      </View>
   );
};

export default RestaurantHeader;
