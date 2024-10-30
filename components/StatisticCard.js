import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

const StatisticCard = ({ name, age, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.age} numberOfLines={1}>
          {age} tuổi
        </Text>
      </View>
      {/* Star icon in the bottom right corner */}
      <View style={styles.starContainer}>
        <MaterialIcons name="star" size={24} color="gold" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#333",
    overflow: "hidden",
    position: "relative", // Enable positioning for child elements
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 14, // Decrease font size for name
    color: "#fff",
    fontWeight: "bold",
  },
  age: {
    fontSize: 12, // Decrease font size for age
    color: "yellow", // Ensure age text is yellow
    marginTop: 5, // Add margin for spacing
  },
  starContainer: {
    position: "absolute", // Position the star icon absolutely
    bottom: 10, // Distance from the bottom of the card
    right: 10, // Distance from the right of the card
  },
});

export default StatisticCard;
