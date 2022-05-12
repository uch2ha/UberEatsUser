import { StyleSheet } from "react-native";

export default StyleSheet.create({
   page: {
      flex: 1,
   },
   image: {
      width: "100%",
      aspectRatio: 5 / 3,
   },
   container: {
      padding: 15,
      paddingBottom: 10,
   },
   iconContainer: {
      position: "absolute",
      top: 45,
      left: 15,
   },
   title: {
      fontSize: 35,
      fontWeight: "600",
      marginVertical: 10,
   },
   subtitle: {
      color: "#525252",
      fontSize: 15,
   },
   menuContainer: {
      borderTopColor: "lightgray",
      borderTopWidth: 1,
   },
   menuTitle: {
      paddingTop: 5,
      marginVertical: 10,
      paddingLeft: 15,
      fontSize: 16,
      letterSpacing: 0.7,
   },
});
