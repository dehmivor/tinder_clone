import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DatingAppScreen = () => {
  const navigation = useNavigation();

  const options = [
    {
      id: 1,
      text: "Kiểm tìm tình yêu",
      favorite: "1.6N",
      icon: "heart",
      backgroundColor: "#FF6B6B",
      size: 48,
    },
    {
      id: 2,
      text: "Rảnh tối nay",
      favorite: "1.4N",
      icon: "clock",
      backgroundColor: "#009dd0",
      size: 48,
    },
    {
      id: 3,
      text: "Kết bạn nhé",
      favorite: "1.2N",
      icon: "user-plus",
      backgroundColor: "#b972ff",
      size: 48,
    },
    {
      id: 4,
      text: "Hẹn đi cafe",
      favorite: "1.8N",
      icon: "coffee",
      backgroundColor: "#fe5f35",
      size: 48,
    },
  ];

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.header}>
        <Image
          source={require("../../assets/text-logo.png")}
          style={mainStyles.logo}
        />
      </View>

      <ScrollView contentContainerStyle={mainStyles.content}>
        {/* Phần Verify */}
        <View style={verifyStyles.primaryOptions}>
          <Text style={mainStyles.title}>Chào mừng đến với thẻ khám phá</Text>
          <TouchableOpacity
            style={[
              verifyStyles.primaryButton,
              {
                backgroundColor: "#ff5a56",
                width: "100%",
                paddingVertical: 20,
              },
            ]}
          >
            <View style={verifyStyles.buttonContent}>
              <View style={verifyStyles.iconContainer}>
                <MaterialIcons name="camera-alt" size={48} color="white" />
              </View>
              <View style={verifyStyles.verifyContainer}>
                <Text style={verifyStyles.verifyText}>
                  Hãy xác minh hình ảnh
                </Text>
                <TouchableOpacity style={verifyStyles.tryNowButton}>
                  <Text style={verifyStyles.tryNowText}>Thử ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Phần Options */}
        <View style={mainStyles.secondaryOptions}>
          <Text style={mainStyles.title}>Hẹn hò chung mục đích</Text>
          <Text style={mainStyles.subtitle}>
            Tìm kiếm những người có chung mục đích hẹn hò
          </Text>
          <View style={mainStyles.rowContainer}>
            {options.map(
              (option, index) =>
                index % 2 === 0 && (
                  <View style={mainStyles.row} key={option.id}>
                    <TouchableOpacity
                      style={[
                        mainStyles.secondaryButton,
                        { backgroundColor: option.backgroundColor },
                      ]}
                    >
                      <View style={mainStyles.buttonContent}>
                        <View style={mainStyles.iconContainer}>
                          <Feather
                            name={option.icon}
                            size={option.size}
                            color="white"
                          />
                        </View>
                        <View style={mainStyles.textContainer}>
                          <Text
                            style={[
                              mainStyles.optionText,
                              mainStyles.whiteText,
                            ]}
                          >
                            {option.text}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {options[index + 1] && (
                      <TouchableOpacity
                        style={[
                          mainStyles.secondaryButton,
                          {
                            backgroundColor: options[index + 1].backgroundColor,
                          },
                        ]}
                      >
                        <View style={mainStyles.buttonContent}>
                          <View style={mainStyles.iconContainer}>
                            <Feather
                              name={options[index + 1].icon}
                              size={options[index + 1].size}
                              color="white"
                            />
                          </View>
                          <View style={mainStyles.textContainer}>
                            <Text
                              style={[
                                mainStyles.optionText,
                                mainStyles.whiteText,
                              ]}
                            >
                              {options[index + 1].text}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )
            )}
          </View>
        </View>
      </ScrollView>

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
    </View>
  );
};

// Styles cho phần verify
const verifyStyles = StyleSheet.create({
  primaryOptions: {
    marginBottom: 20,
  },
  primaryButton: {
    borderRadius: 8,
    height: 200,
    paddingHorizontal: 12,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
  },
  verifyContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verifyText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "50%",
    color: "white",
  },
  tryNowButton: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  tryNowText: {
    color: "#ff5a56",
    fontWeight: "bold",
  },
});

// Styles cho phần còn lại
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 40,
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  secondaryOptions: {
    marginTop: 20,
  },
  rowContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  secondaryButton: {
    flex: 1,
    borderRadius: 8,
    height: 300,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    paddingBottom: 16,
  },
  optionText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "90%",
  },
  whiteText: {
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
  },
  footerIcon: {
    width: 24,
    height: 24,
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

export default DatingAppScreen;
