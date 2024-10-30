import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ChatScreen from "../screens/ChatScreen";

import useAuth from "../hooks/useAuth";

import MessageScreen from "../screens/MessageScreen";
import NotificationScreen from "../screens/NotificationScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Chat"}
    >
      <>
        <Stack.Group>
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            ...TransitionPresets.ModalPresentationIOS,
          }}
        ></Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "transparentModal",
            ...TransitionPresets.ModalPresentationIOS,
          }}
        ></Stack.Group>
      </>
    </Stack.Navigator>
  );
};

export default StackNavigator;
