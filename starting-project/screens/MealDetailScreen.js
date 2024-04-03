import React from "react";
import { Text } from "react-native";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealID;
  return <Text>Meal detail {mealId}</Text>;
}
