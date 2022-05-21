import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

export default function App() {
   return (
      <NavigationContainer>
         <RootNavigator />
         <StatusBar style="light" />
      </NavigationContainer>
   );
}

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//       // padding: 15,
//       // marginTop: Platform.OS === "android" ? 25 : 0,
//    },
// });
