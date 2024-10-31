import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.statusBar}>
        <View style={styles.statusIcons}>
          <View style={styles.signalWifi}>
            <View style={styles.batteryIcon}>
              <View style={styles.batteryLevel} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cài Đặt</Text>
        <TouchableOpacity>
          <Text style={styles.headerRight}>Xong</Text>
        </TouchableOpacity>
      </View>

      {/* Subscription Options */}
      <TouchableOpacity style={styles.subscriptionOption}>
        <View style={styles.tinderLogoContainer}>
          <View style={styles.boostButton}>
            <Ionicons name="flame" size={28} color="#fff" />
          </View>
          <View style={styles.platinumBadge}>
            <Text style={styles.platinumText}>PLATINUM</Text>
          </View>
        </View>
        <Text style={styles.subscriptionDesc}>
          Lượt Thích được ưu tiên, Xem ai Thích bạn & Nhiều quyền lợi khác
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subscriptionOption}>
        <View style={styles.tinderLogoContainer}>
          <View style={styles.boostButton}>
            <Ionicons name="flame" size={28} color="#FFD700" />
          </View>
          <View style={styles.goldBadge}>
            <Text style={styles.goldBadgeText}>GOLD</Text>
          </View>
        </View>
        <Text style={styles.subscriptionDesc}>
          Xem ai Thích bạn & Nhiều quyền lợi khác
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subscriptionOption}>
        <View style={styles.tinderLogoContainer}>
          <View style={styles.boostButton}>
            <Ionicons name="flame" size={28} color="#FF4458" />
          </View>
          <Text style={styles.plusText}>+</Text>
        </View>
        <Text style={styles.subscriptionDesc}>
          Lượt Thích Vô Hạn & Nhiều quyền lợi khác
        </Text>
      </TouchableOpacity>

      {/* Feature Grid */}
      <View style={styles.featureGrid}>
        <TouchableOpacity style={styles.featureButton}>
          <View style={styles.featureIcon}>
            <Text style={[styles.featureIconText, { color: "#00D4FF" }]}>
              ★
            </Text>
          </View>
          <Text style={[styles.featureText, { color: "#00D4FF" }]}>
            Mua lượt Siêu Thích
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <View style={styles.featureIcon}>
            <Text style={[styles.featureIconText, { color: "#A020F0" }]}>
              ⚡
            </Text>
          </View>
          <Text style={[styles.featureText, { color: "#A020F0" }]}>
            Mua lượt Tăng Tốc
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <View style={styles.featureIcon}>
            <Text style={[styles.featureIconText, { color: "#FFFFFF" }]}>
              👁️
            </Text>
          </View>
          <Text style={styles.featureText}>Dùng chế độ Ẩn Danh</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <View style={styles.featureIcon}>
            <Text style={[styles.featureIconText, { color: "#FF4458" }]}>
              ✈️
            </Text>
          </View>
          <Text style={[styles.featureText, { color: "#FF4458" }]}>
            Dùng Chế độ Hộ Chiếu
          </Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings */}
      <View style={styles.accountSection}>
        <Text style={styles.sectionTitle}>CÀI ĐẶT TÀI KHOẢN</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Số Điện Thoại</Text>
          <View style={styles.settingValue}>
            <Text style={styles.settingValueText}>84931670627</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Tài khoản đã liên kết</Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Email</Text>
          <View style={styles.settingValue}>
            <Text style={styles.settingValueText}>
              tamntmhe172274@fpt.edu.vn
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.securityText}>
        Xác minh Số Điện Thoại và Email giúp bảo mật tài khoản của bạn.
      </Text>

      <View style={styles.searchPreferences}>
        <Text style={styles.searchTitle}>TÌM KIẾM CAO CẤP</Text>
        <View style={styles.goldBadgeSmall}>
          <Text style={styles.goldText}>Tinder Gold™</Text>
        </View>
        <Text style={styles.searchDesc}>
          Các lựa chọn tiêu chí giúp hiển thị những người hợp gu của bạn, nhưng
          sẽ không hạn chế việc bạn nhìn thấy hoặc được nhìn thấy bởi những
          người khác
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  statusBar: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  time: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
  },
  headerRight: {
    color: "#0095f6",
    fontSize: 17,
  },
  subscriptionOption: {
    backgroundColor: "#1c1c1e",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  tinderLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  tinderLogo: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  platinumBadge: {
    backgroundColor: "#E5E4E2",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  platinumText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  goldBadge: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  goldBadgeText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  plusText: {
    color: "#FF4458",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 4,
  },
  subscriptionDesc: {
    color: "#fff",
    fontSize: 16,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    justifyContent: "space-between",
  },
  featureButton: {
    width: "48%",
    backgroundColor: "#1c1c1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  featureIconText: {
    fontSize: 24,
  },
  featureText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  accountSection: {
    marginTop: 24,
  },
  sectionTitle: {
    color: "#666",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  settingLabel: {
    color: "#fff",
    fontSize: 17,
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValueText: {
    color: "#666",
    fontSize: 17,
    marginRight: 8,
  },
  securityText: {
    color: "#666",
    fontSize: 13,
    padding: 16,
    lineHeight: 18,
  },
  searchPreferences: {
    padding: 16,
  },
  searchTitle: {
    color: "#666",
    fontSize: 13,
    fontWeight: "bold",
  },
  goldBadgeSmall: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginVertical: 8,
  },
  goldText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "bold",
  },
  searchDesc: {
    color: "#666",
    fontSize: 13,
    lineHeight: 18,
  },
});

export default Settings;
