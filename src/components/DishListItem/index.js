import {
   View,
   StyleSheet,
   FlatList,
   Text,
   Image,
   Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
   const navigation = useNavigation();
   return (
      <Pressable
         onPress={() => navigation.navigate("Dish", { id: dish.id })}
         style={styles.container}
      >
         <View style={{ flex: 1 }}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>
               {dish.description}
            </Text>
            <Text style={styles.price}>${dish.price}</Text>
         </View>
         {dish.image && (
            <Image source={{ uri: dish.image }} style={styles.image} />
         )}
      </Pressable>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: 0,
      paddingVertical: 10,
      marginVertical: 5,
      marginHorizontal: 15,
      borderBottomColor: "lightgray",
      borderBottomWidth: 1,
      flexDirection: "row",
   },
   name: {
      fontWeight: "600",
      fontSize: 17,
      letterSpacing: 0.5,
   },
   description: {
      color: "gray",
      marginVertical: 10,
   },
   price: { fontSize: 16 },
   image: {
      height: 75,
      aspectRatio: 1,
      marginLeft: 10,
   },
});

export default DishListItem;
