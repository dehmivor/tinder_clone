import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const imageUrl =
  "https://th.bing.com/th?id=OIP.4akau9Zyzq-ioaE0S_YVrwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.4&pid=3.1&rm=2";

const data = {
  "Lượt Thích": [
    { id: "1", name: "John Doe", age: 30, imageUrl },
    { id: "2", name: "Jane Smith", age: 28, imageUrl },
    { id: "3", name: "Alice Brown", age: 35, imageUrl },
    { id: "4", name: "Bob Lee", age: 40, imageUrl },
  ],
  "Lượt Tuyển Chọn": [
    { id: "5", name: "Chris Green", age: 25, imageUrl },
    { id: "6", name: "Lisa White", age: 32, imageUrl },
    { id: "7", name: "Emma Black", age: 29, imageUrl },
    { id: "8", name: "Mark Blue", age: 45, imageUrl },
  ],
};

const StatisticCard = ({ name, age, imageUrl }) => (
  <View style={styles.cardContainer}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.card}
      imageStyle={styles.cardImage}
    >
      <View style={styles.cardFooter}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardAge}>{age} tuổi</Text>{" "}
        {/* Changed this to a separate line for clarity */}
        <MaterialIcons
          name="star"
          size={24}
          color="gold"
          style={styles.starIcon}
        />
      </View>
    </ImageBackground>
  </View>
);

const Statistic = () => {
  const [selectedTab, setSelectedTab] = useState("Lượt Thích");

  return (
    <View style={styles.container}>
      {/* Header with Star Icon and Text */}
      <View style={styles.header}>
        <MaterialIcons name="star" size={28} color="gold" />
        <Text style={styles.headerText}>Minh Tâm</Text>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("Lượt Thích")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Lượt Thích" && styles.activeTabText,
            ]}
          >
            Thích
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("Lượt Tuyển Chọn")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Lượt Tuyển Chọn" && styles.activeTabText,
            ]}
          >
            Tuyển Chọn
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card List */}
      <FlatList
        data={data[selectedTab]} // Dynamically select data based on the tab
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StatisticCard
            name={item.name}
            age={item.age}
            imageUrl={item.imageUrl}
          />
        )}
        numColumns={2}
        scrollEnabled={false} // Disable scrolling to fit all cards on one screen
        contentContainerStyle={styles.cardList}
      />

      {/* Empty View to maintain space at the bottom */}
      <View style={styles.emptySpace} />
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    paddingBottom: 20, // Space at the bottom of the screen
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the content horizontally
    padding: 16,
  },
  headerText: {
    fontSize: 24, // Increased font size for header text
    color: "pink", // Pink color for the text
    fontWeight: "bold", // Bold text
    marginLeft: 8, // Space between icon and text
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000", // Match the tab background with the container background
    paddingVertical: 8, // Reduced padding for compact appearance
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tabText: {
    fontSize: 18, // Increased font size for tab text
    color: "#fff",
  },
  activeTabText: {
    fontSize: 20, // Even larger font size for active tab
    fontWeight: "bold", // Make it bold
    color: "#fff", // Keeping it white
  },
  cardList: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  cardContainer: {
    flex: 1, // Make the container flex to adapt to screen size
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    width: "100%", // Use full width of the cardContainer
    height: height / 3, // Ensure height is set to allow aspect ratio to maintain integrity
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end", // Align footer to the bottom
  },
  cardImage: {
    borderRadius: 10, // Rounded corners for the image
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
    fontSize: 16, // Increased font size for name
    color: "#fff", // White color for name
  },
  cardAge: {
    fontSize: 14, // Font size for age
    color: "yellow", // Yellow color for age
  },
  starIcon: {
    marginLeft: "auto",
  },
  emptySpace: {
    height: 20, // Maintain space at the bottom of the screen
  },
});

export default Statistic;
