import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Sử dụng expo-linear-gradient
import { FontAwesome } from "@expo/vector-icons"; // Sử dụng icon từ thư viện FontAwesome

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="shield" size={24} color="white" />
        <FontAwesome name="gear" size={24} color="white" />
      </View>

      {/* Tinder Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>tinder</Text>
      </View>

      {/* Progress Circle */}
      <View style={styles.progressContainer}>
        <View style={styles.circle}>
          <Image
            source={{ uri: "https://example.com/progress_image.png" }} // Thay hình ảnh bằng URL thực
            style={styles.progressImage}
          />
        </View>
        {/* Sử dụng expo-linear-gradient */}
        <LinearGradient
          colors={["#ff6f61", "#ff926b"]}
          style={styles.progressButton}
        >
          <Text style={styles.progressText}>50% HOÀN THÀNH</Text>
        </LinearGradient>
      </View>

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>Tâm, 20</Text>
        <FontAwesome name="refresh" size={24} color="white" />
      </View>

      {/* Options Section */}
      <ScrollView horizontal style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>0 lượt Siêu Thích</Text>
          <Text style={styles.buyMore}>MUA THÊM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Lượt Tăng Tốc của tôi</Text>
          <Text style={styles.buyMore}>MUA THÊM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Gói đăng ký</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Tinder Gold Section */}
      <View style={styles.tinderGoldContainer}>
        <View style={styles.goldHeader}>
          <Text style={styles.goldText}>tinder</Text>
          <Text style={styles.goldUpgrade}>Nâng cấp</Text>
        </View>
        <View style={styles.goldFeatures}>
          <View style={styles.featureRow}>
            <Text style={styles.featureText}>Xem ai Thích Bạn</Text>
            <FontAwesome name="check" size={24} color="gold" />
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureText}>Top Tuyển chọn</Text>
            <FontAwesome name="check" size={24} color="gold" />
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureText}>Lượt Siêu Thích Miễn Phí</Text>
            <FontAwesome name="check" size={24} color="gold" />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAllFeatures}>Xem tất cả tính năng</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <FontAwesome name="fire" size={24} color="white" />
        <FontAwesome name="th-large" size={24} color="white" />
        <FontAwesome name="star" size={24} color="white" />
        <FontAwesome name="comments" size={24} color="white" />
        <FontAwesome name="user" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#1c1c1e",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  time: {
    fontSize: 16,
    color: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logoText: {
    fontSize: 32,
    color: "red",
    fontWeight: "bold",
  },
  progressContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2f2f31",
    justifyContent: "center",
    alignItems: "center",
  },
  progressImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  progressButton: {
    marginTop: -20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  progressText: {
    color: "white",
    fontWeight: "bold",
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    color: "white",
    marginRight: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: "#2f2f31",
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  optionText: {
    color: "white",
    marginBottom: 10,
  },
  buyMore: {
    color: "#ff6f61",
  },
  tinderGoldContainer: {
    backgroundColor: "#ffecb3",
    padding: 20,
    borderRadius: 10,
  },
  goldHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  goldText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6f61",
  },
  goldUpgrade: {
    color: "#ff6f61",
    fontWeight: "bold",
  },
  goldFeatures: {
    marginBottom: 10,
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    color: "#333",
  },
  seeAllFeatures: {
    color: "#ff6f61",
    textAlign: "center",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#2f2f31",
  },
});

export default Profile;
