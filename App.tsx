import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Home from "./src/screens/Home";
import { FormScreen } from "./src/screens/FormScreen";
import { useState } from "react";

export default function App() {
  const [activate, setActivate] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // ajuste conforme necessário
    >
      {activate ? <FormScreen /> : <Home set={setActivate} />}
      {/* <Home /> */}
      {/* <FormScreen /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4D4D",
    alignItems: "center",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end", // ou 'center' dependendo do layout
    padding: 24,
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
