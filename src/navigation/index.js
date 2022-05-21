import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsPage from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import BasketScreen from "../screens/BasketScreen";
import OrdersPageScreen from "../screens/OrdersPageScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen
            name="Restaurant"
            component={RestaurantDetailsPage}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   );
};

export default RootNavigator;
