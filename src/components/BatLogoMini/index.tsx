import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import batLogo from "../../../assets/bat-logo.png";

export function BatLogoMini() {
  return (
    <View style={styles.container}>
      <Image
        source={batLogo}
        style={{
          resizeMode: "contain",
          height: 80,
          zIndex: 10,
          width: 100,
        }}
      />
      <View style={styles.circle} />
    </View>
  );
}
