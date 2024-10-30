import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const ProfileCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ảnh đại diện */}
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/a/ACg8ocI543iFOLiFWA2XKaoSbuVGdnjtiLVUfnj5rUjGm-pHhc9NelU=s96-c",
        }}
        style={styles.profileImage}
      />

      {/* Thông tin người dùng */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>htd</Text>
        <Text style={styles.age}>19</Text>
        <Text style={styles.bio}>“bị ngại nói ý 🥺”</Text>
        <Text style={styles.instagram}>ins: dnuo_gg</Text>
      </View>

      {/* Các nút hành động */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="refresh" size={30} color="#828282" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="times" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="star" size={30} color="#2196F3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="heart" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="send" size={30} color="#03A9F4" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 16,
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  age: {
    fontSize: 18,
    color: "#828282",
    marginVertical: 4,
  },
  bio: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
  },
  instagram: {
    fontSize: 14,
    color: "#03A9F4",
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    marginHorizontal: 10,
  },
});

export default ProfileCard;
