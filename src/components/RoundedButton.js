import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RoundedButton = ({
  style = {},
  text = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[style]}>
      <Text style={[textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
    },
    textStyle: {
      text: { color: "#fff", fontSize: 20 },
    },
  });
