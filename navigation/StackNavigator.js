import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ChatScreen from "../screens/ChatScreen";

import Swipe from "../screens/Swipe";
import Statistic from "../screens/Statistic";
import StatisticModal from "../screens/StatisticModal";
import useAuth from "../hooks/useAuth";

import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Swipe"}
    >
      <>
        <Stack.Group>
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="Swipe" component={Swipe} />
          <Stack.Screen name="Statistic" component={Statistic} />
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
