import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>What would like to focus on</Text>
      <TextInput />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    paddingBottom: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
