import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import { BatLogoMini } from "../../components/BatLogoMini";
import { BatInput } from "../../components/BatInput";
import { BatButton } from "../../components/BatButton";

export function FormScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <BatLogoMini />
      </View>
      <BatInput name="Nome" placeholder="Digite seu nome..." />
      <BatInput name="Telefone" placeholder="Digite seu telefone..." />
      <BatInput
        name="Localização"
        placeholder="Digite a localização..."
        multiline={true}
      />
      <BatInput
        name="Observação"
        placeholder="Digite as observações..."
        multiline={true}
      />
      <View style={styles.containerButton}>
        <BatButton text="Enviar" />
      </View>
    </View>
  );
}
