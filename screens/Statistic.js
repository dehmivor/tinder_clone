import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import StatisticCard from "../components/StatisticCard"; // Import the new StatisticCard component
import StatisticModal from "./StatisticModal"; // Import the new StatisticModal component
import { MaterialIcons } from "@expo/vector-icons";

const Statistic = () => {
  const [selectedTab, setSelectedTab] = useState("Lượt Thích");
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]); // State for storing data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from mock API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://672220c52108960b9cc30434.mockapi.io/api/user"
        );
        const json = await response.json();
        setData(json); // Set the fetched data
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []);

  const handleCardPress = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  // Filter data based on selected tab
  const filteredData = data.filter((item) =>
    selectedTab === "Lượt Thích" ? item.id <= "4" : item.id > "4"
  );

  // Loading Indicator
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with Star Icon and Text */}
      <View style={styles.header}>
        <MaterialIcons name="star" size={28} color="gold" />
        <Text style={styles.headerText} numberOfLines={1}>
          Tinder
        </Text>
      </View>

      {/* Tabs for Likes and Selections */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Lượt Thích" && styles.activeTab]}
          onPress={() => setSelectedTab("Lượt Thích")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Lượt Thích" && styles.activeTabText,
            ]}
            numberOfLines={1}
          >
            Lượt Thích
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Lượt Tuyển Chọn" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Lượt Tuyển Chọn")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Lượt Tuyển Chọn" && styles.activeTabText,
            ]}
            numberOfLines={1}
          >
            Lượt Tuyển Chọn
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card List - Make FlatList scrollable */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StatisticCard
            name={item.name}
            age={item.age}
            imageUrl={item.imageUrl}
            onPress={() => handleCardPress(item)}
          />
        )}
        numColumns={2}
        // Remove scrollEnabled={false} to allow scrolling
        style={styles.cardList}
        contentContainerStyle={styles.cardListContent} // Use this style for proper spacing
      />

      {/* Modal for Card Details */}
      <StatisticModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedCard={selectedCard}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  headerText: {
    fontSize: 20, // Reduced font size
    color: "#D93D55",
    fontWeight: "bold",
    marginLeft: 10,
    maxWidth: width * 0.5, // Set a max width to prevent wrapping
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000", // Match background color
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  tabText: {
    fontSize: 14, // Reduced font size
    color: "white",
    maxWidth: "100%", // Set max width to prevent wrapping
  },
  activeTabText: {
    fontSize: 16, // Slightly larger for active tab
    fontWeight: "bold",
  },
  cardList: {
    paddingBottom: 20, // Maintain space at the bottom
  },
  cardListContent: {
    paddingBottom: 20, // Adjust padding for card list content
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Statistic;
