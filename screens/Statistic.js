import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import StatisticCard from ".components/StatisticCard"; // Import the new StatisticCard component
import StatisticModal from "./StatisticModal"; // Import the new StatisticModal component
import { MaterialIcons } from "@expo/vector-icons";

const imageUrl =
  "https://th.bing.com/th?id=OIP.4akau9Zyzq-ioaE0S_YVrwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.4&pid=3.1&rm=2";

const data = {
  "Lượt Thích": [
    {
      id: "1",
      name: "John Doe",
      age: 30,
      imageUrl,
      intro: "I love hiking and outdoor activities.",
      hobbies: "Hiking, Traveling",
      mainInfo: "Software Engineer",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 28,
      imageUrl,
      intro: "Avid reader and book collector.",
      hobbies: "Reading, Writing",
      mainInfo: "Graphic Designer",
    },
    {
      id: "3",
      name: "Alice Brown",
      age: 35,
      imageUrl,
      intro: "Foodie and passionate cook.",
      hobbies: "Cooking, Exploring",
      mainInfo: "Chef",
    },
    {
      id: "4",
      name: "Bob Lee",
      age: 40,
      imageUrl,
      intro: "Tech enthusiast and gamer.",
      hobbies: "Gaming, Tech",
      mainInfo: "IT Specialist",
    },
  ],
  "Lượt Tuyển Chọn": [
    {
      id: "5",
      name: "Chris Green",
      age: 25,
      imageUrl,
      intro: "Fitness trainer and nutritionist.",
      hobbies: "Fitness, Cooking",
      mainInfo: "Personal Trainer",
    },
    {
      id: "6",
      name: "Lisa White",
      age: 32,
      imageUrl,
      intro: "Travel blogger and photographer.",
      hobbies: "Traveling, Photography",
      mainInfo: "Blogger",
    },
    {
      id: "7",
      name: "Emma Black",
      age: 29,
      imageUrl,
      intro: "Artist and painter.",
      hobbies: "Painting, Art",
      mainInfo: "Artist",
    },
    {
      id: "8",
      name: "Mark Blue",
      age: 45,
      imageUrl,
      intro: "Music lover and composer.",
      hobbies: "Music, Composing",
      mainInfo: "Musician",
    },
  ],
};

const Statistic = () => {
  const [selectedTab, setSelectedTab] = useState("Lượt Thích");
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header with Star Icon and Text */}
      <View style={styles.header}>
        <MaterialIcons name="star" size={28} color="gold" />
        <Text style={styles.headerText}>Minh Tâm</Text>
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
          >
            Lượt Tuyển Chọn
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card List */}
      <FlatList
        data={data[selectedTab]}
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
        scrollEnabled={false}
        style={styles.cardList}
      />

      <View style={styles.emptySpace} />

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
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: "pink",
    fontWeight: "bold",
    marginLeft: 10,
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
    fontSize: 16,
    color: "white",
  },
  activeTabText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardList: {
    paddingBottom: 20, // Maintain space at the bottom
  },
  emptySpace: {
    height: 20, // Maintain space at the bottom of the screen
  },
});

export default Statistic;
