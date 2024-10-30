import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Import icons from expo vector icons

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://672220c52108960b9cc30434.mockapi.io/api/card"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCard = (card) => {
    return (
      <View style={styles.card}>
        {/* Main Image */}
        <Image
          source={{ uri: card.avatar }}
          style={styles.cardImage}
          resizeMode="cover" // Ensure the image covers the card
          onError={(error) =>
            console.error("Image load error: ", error.nativeEvent.error)
          }
        />

        {/* Text Container */}
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>
            {card.name}, {card.age}
          </Text>
          <Text style={styles.bio}>{card.describe}</Text>
          <Text style={styles.social}>Social: {card.social}</Text>
        </View>
      </View>
    );
  };

  const onSwipedLeft = (cardIndex) => {
    console.log(`You swiped left on card ${cardIndex}`);
  };

  const onSwipedRight = (cardIndex) => {
    console.log(`You swiped right on card ${cardIndex}`);
  };

  return (
    <View style={styles.container}>
      {/* Top Row with Icons and Yellow Text */}
      <View style={styles.topRow}>
        <Ionicons name="home" size={24} color="white" />
        <Text style={styles.yellowText}>My App</Text>
        <MaterialIcons name="notifications" size={24} color="white" />
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <Swiper
          cards={cards}
          renderCard={renderCard}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          cardIndex={0}
          backgroundColor={"#000000"} // Set the background of the Swiper to black
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "red",
                  borderColor: "red",
                  color: "white",
                  fontSize: 24,
                  padding: 10,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "green",
                  borderColor: "green",
                  color: "white",
                  fontSize: 24,
                  padding: 10,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      )}

      {/* Icons at the Bottom */}
      <View style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="white" />
        <FontAwesome name="user" size={24} color="white" />
        <MaterialIcons name="favorite" size={24} color="white" />
        <Ionicons name="settings" size={24} color="white" />
        <FontAwesome name="info-circle" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Set the background to black
    justifyContent: "flex-start", // Align items to the top of the container
    alignItems: "center",
  },
  topRow: {
    position: "absolute", // Positioning the top row absolutely
    top: 0, // Align to the top of the container
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Full width for the top row
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Optional background for better visibility
    zIndex: 10, // Ensure the top row is above other elements
  },
  yellowText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    justifyContent: "flex-end", // Align content to the bottom of the card
    alignItems: "flex-start", // Align items to the left
    backgroundColor: "transparent", // Make the card background transparent
  },
  cardImage: {
    width: "100%", // Cover the full width of the card
    height: "100%", // Cover the full height of the card
    position: "absolute", // Position image absolutely within the card
    top: 0,
    left: 0,
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute", // Position the text container absolutely
    bottom: 20, // Position it at the top of the card
    left: 20, // Align it to the left
    zIndex: 1, // Ensure the text is above the image
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white", // Change text color to white for visibility
  },
  bio: {
    fontSize: 16,
    color: "white",
    marginVertical: 2,
  },
  social: {
    fontSize: 16,
    color: "gray",
    marginVertical: 2,
  },
  iconContainer: {
    position: "absolute", // Position icons absolutely at the bottom
    bottom: 10, // Align it to the bottom of the screen
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%", // Ensure icons stretch across the bottom
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Optional background for better visibility
    zIndex: 10, // Ensure the icon container is above the cards
  },
});
