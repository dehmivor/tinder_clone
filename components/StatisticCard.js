import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const StatisticCard = ({ name, age, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.card}
      imageStyle={styles.cardImage}
    >
      <View style={styles.cardFooter}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardAge}>{age} tuổi</Text>
        <MaterialIcons
          name="star"
          size={24}
          color="gold"
          style={styles.starIcon}
        />
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    width: "100%",
    height: 200, // Adjust the height as needed
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardImage: {
    borderRadius: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent footer background
  },
  cardName: {
    fontSize: 16,
    color: "#fff",
  },
  cardAge: {
    fontSize: 14,
    color: "yellow",
  },
  starIcon: {
    marginLeft: "auto",
  },
});

export default StatisticCard;
