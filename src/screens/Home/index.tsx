import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/BatLogo";
import { BatButton } from "../../components/BatButton";

interface HomeProps {
  set: any;
}

export default function Home({ set }: HomeProps) {
  return (
    <View style={styles.appContainer}>
      <BatLogo />
      <View style={styles.viewButton}>
        <BatButton text="Ativar Bat-Sinal" onPress={set} />
      </View>

      <View style={styles.inputContainer}></View>

      <StatusBar style="light" />
    </View>
  );
}
