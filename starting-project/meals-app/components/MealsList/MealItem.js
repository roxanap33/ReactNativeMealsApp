import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordabilty,
}) {
  const navigation = useNavigation();

  function selectMealItemHAndler() {
    navigation.navigate("MealDetail", { mealID: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressedItem : null)}
        onPress={selectMealItemHAndler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordabilty={affordabilty}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
