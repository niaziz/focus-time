import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

import { Focus } from "./src/features/focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>Here Im going to build a timer</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#0D1282",
  },
});
