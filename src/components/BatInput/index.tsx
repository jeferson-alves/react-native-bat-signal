import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { BatButton } from "../BatButton";

interface BatInputProps {
  name: string;
  placeholder: string;
  multiline?: boolean;
}

export function BatInput({
  name,
  placeholder,
  multiline = false,
}: BatInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
}
