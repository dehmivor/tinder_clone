import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Swipe = () => {
  const [cards, setCards] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const swiperRef = React.useRef(null);

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

  const handleSwipe = (direction, cardIndex) => {
    console.log(`Swiped ${direction} on card ${cardIndex}`);
  };

  const renderCard = (card) => {
    if (!card) return null;

    return (
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: card.avatar }}
          style={styles.cardImage}
          resizeMode="cover"
        />

        <View style={styles.cardInfo}>
          <View style={styles.activeStatus}>
            <Text style={styles.activeText}>Active recently</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {card.name}, {card.age}
            </Text>
            <Text style={styles.userBio}>{card.describe}</Text>
            <Text style={styles.userInstagram}>Social: {card.social}</Text>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.boostButton}>
          <Ionicons name="flame" size={28} color="#FF4458" />
        </View>
        <View style={styles.headerRight}>
          <View style={styles.notificationDot}>
            <Ionicons name="notifications" size={24} color="#fff" />
            <View style={styles.dot} />
          </View>
          <MaterialCommunityIcons name="tune-variant" size={24} color="#fff" />
          <View style={styles.boostButton}>
            <Ionicons name="flash" size={24} color="#fff" />
          </View>
        </View>
      </View>

      {/* Swiper */}
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={renderCard}
          onSwipedLeft={(cardIndex) => handleSwipe("left", cardIndex)}
          onSwipedRight={(cardIndex) => handleSwipe("right", cardIndex)}
          onSwipedTop={(cardIndex) => handleSwipe("up", cardIndex)}
          cardIndex={0}
          backgroundColor="transparent"
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "#FF4458",
                  color: "#fff",
                  fontSize: 24,
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
                  backgroundColor: "#00FF7F",
                  color: "#fff",
                  fontSize: 24,
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
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.rewindButton]}
          onPress={() => swiperRef.current.swipeBack()}
        >
          <Ionicons name="refresh" size={24} color="#f0f0f0" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.nopeButton]}
          onPress={() => swiperRef.current.swipeLeft()}
        >
          <Ionicons name="close" size={32} color="#FF4458" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.superlikeButton]}
          onPress={() => swiperRef.current.swipeTop()}
        >
          <Ionicons name="star" size={24} color="#00D4FF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.likeButton]}
          onPress={() => swiperRef.current.swipeRight()}
        >
          <Ionicons name="heart" size={24} color="#00FF7F" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.boostButton]}>
          <Ionicons name="send" size={24} color="#00B8FF" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="flame" size={28} color="#FF4458" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <Ionicons name="grid" size={28} color="#909090" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="diamond" size={28} color="#909090" />
          <View style={styles.badgeCount}>
            <Text style={styles.badgeText}>99+</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Ionicons name="chatbubbles" size={28} color="#909090" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person" size={28} color="#909090" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  swiperContainer: {
    flex: 1,
    marginBottom: 170, // Add margin to prevent overlap with action buttons
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },
  logo: {
    width: 100,
    height: 30,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  notificationDot: {
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: "#FF4458",
    borderRadius: 4,
  },
  cardContainer: {
    height: SCREEN_HEIGHT - 300, // Reduce height to prevent overlap
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10, // Add horizontal margin
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardInfo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  activeStatus: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  activeText: {
    color: "#fff",
    fontSize: 14,
  },
  userInfo: {
    marginTop: 8,
  },
  userName: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  userBio: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },
  userInstagram: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navItem: {
    position: "relative",
    padding: 8,
  },
  badgeCount: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FFB800",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Swipe;
