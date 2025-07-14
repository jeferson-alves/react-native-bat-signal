import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  circle: {
    width: 75,
    height: 75,
    borderWidth: 5,
    borderColor: "#E5BF3C",
    borderRadius: 9999,
    position: "absolute",
    zIndex: 0,
  },
});
