import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Mels Overview Screeen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
