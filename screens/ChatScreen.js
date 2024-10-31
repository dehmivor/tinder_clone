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
    </SafeAreaView>
  );
};

export default ChatScreen;
