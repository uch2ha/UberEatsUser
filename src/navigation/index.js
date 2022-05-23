import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import BasketScreen from "../screens/BasketScreen";
import OrdersPageScreen from "../screens/OrdersPageScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
   );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
   return (
      <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
         <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="home" size={24} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Orders"
            component={OrdersStackNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="list" size={24} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={OrdersPageScreen}
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="user" size={24} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Restaurants" component={HomeScreen} />
         <HomeStack.Screen
            name="Restaurant"
            component={RestaurantDetailsScreen}
         />
         <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
         <HomeStack.Screen name="Basket" component={BasketScreen} />
      </HomeStack.Navigator>
   );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
   return (
      <OrdersStack.Navigator>
         <OrdersStack.Screen name="Orders" component={OrdersPageScreen} />
         <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
      </OrdersStack.Navigator>
   );
};

export default RootNavigator;
