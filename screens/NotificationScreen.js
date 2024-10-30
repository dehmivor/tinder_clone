import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header"; // Nếu bạn có component Header
import tw from "twrnc";

// Dữ liệu giả lập cho thông báo
const notifications = [
  { id: "1", title: "Welcome!", message: "Thanks for joining us." },
  { id: "2", title: "New Feature", message: "Check out the new update!" },
  { id: "3", title: "Reminder", message: "Don't forget your daily check-in!" },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={tw.style("p-4 border-b border-gray-200")}>
      <Text style={tw.style(`text-lg font-semibold text-gray-800`)}>
        {item.title}
      </Text>
      <Text style={tw.style(`text-sm text-gray-600`)}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={tw.style(`flex-1 bg-white`)}>
      <Header title="Notifications" />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={tw.style(`p-4 items-center`)}>
            <Text style={tw.style(`text-gray-600`)}>
              No notifications at the moment.
            </Text>
          </View>
        )}
        contentContainerStyle={tw.style(`p-2`)}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
