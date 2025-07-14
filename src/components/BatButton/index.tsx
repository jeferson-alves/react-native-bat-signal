import { Pressable, Text, View, PressableProps } from "react-native";

import { styles } from "./styles";

interface BatButtonProps extends PressableProps {
  text: string;
}

export function BatButton({ text, ...rest }: BatButtonProps) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
