import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import ChatList from "../components/ChatList";
import Header from "../components/Header";

const ChatScreen = () => {
  return (
    <SafeAreaView style={tw.style("pt-5")}>
      <Header title="Chat" />
      <ChatList />
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="flame" size={28} color="#FF4458" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
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

        <TouchableOpacity style={styles.navItem}>
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

export default ChatScreen;
