import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import Swiper from "react-native-deck-swiper";

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
        <Image source={{ uri: card.image }} style={styles.cardImage} />
        <Text style={styles.cardText}>
          {card.name}, {card.age}
        </Text>
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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Swiper
          cards={cards}
          renderCard={renderCard}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          cardIndex={0}
          backgroundColor={"#f0f0f0"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});
