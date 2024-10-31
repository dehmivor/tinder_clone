// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "../screens/LoginAndRegister/FirstPage"; // Đường dẫn tới file FirstPage
import InputNum from "../screens/LoginAndRegister/InputNum"; // Đường dẫn tới file InputNum
import PinInput from "../screens/LoginAndRegister/PinInput"; // Đường dẫn tới file InputNum
import NameScreen from "../screens/SetupProfile/ProfileSetupScreen/NameInput"; // Đường dẫn tới file NameScreen
import BirthdayScreen from "../screens/SetupProfile/ProfileSetupScreen/BirthdayInput"; // Đường dẫn tới file BirthdayScreen
import GenderScreen from "../screens/SetupProfile/ProfileSetupScreen/GenderInput"; // Đường dẫn tới file GenderScreen
import OrientationScreen from "../screens/SetupProfile/ProfileSetupScreen/OrientationSelection"; // Đường dẫn tới file OrientationScreen
import ShowMeScreen from "../screens/SetupProfile/ProfileSetupScreen/ShowMeScreen"; // Đường dẫn tới file OrientationScreen
import InterestSelectionScreen from "../screens/SetupProfile/ProfileSetupScreen/InterestSelection"; // Đường dẫn tới file OrientationScreen
import PhotoUploadScreen from "../screens/SetupProfile/ProfileSetupScreen/PhotoUpload"; // Đường dẫn tới file OrientationScreen
import LocationPermissionScreen from "../screens/SetupProfile/ProfileSetupScreen/LocationPermission"; // Đường dẫn tới file OrientationScreen
import Statistic from "../screens/Statistic";
import Home from "../screens/Swipe";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import ChatScreen from "../screens/ChatScreen";
import StatisticModal from "../screens/StatisticModal";
import useAuth from "../hooks/useAuth";
import MessageScreen from "../screens/MessageScreen";
import DatingAppScreen from "../screens/SearchScreen/SearchScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }} // Ẩn header nếu cần
        />
        <Stack.Screen
          name="InputNum"
          component={InputNum}
          options={{ headerShown: false }} // Ẩn header nếu cần
        />
        <Stack.Screen
          name="PinInput"
          component={PinInput}
          options={{ headerShown: false }} // Ẩn header nếu cần
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{ headerShown: false }} // Ẩn header nếu cần
        />
        <Stack.Screen
          name="BirthdayScreen"
          component={BirthdayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GenderScreen"
          component={GenderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrientationScreen"
          component={OrientationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowMeScreen"
          component={ShowMeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InterestSelectionScreen"
          component={InterestSelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhotoUploadScreen"
          component={PhotoUploadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationPermissionScreen"
          component={LocationPermissionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistic"
          component={DatingAppScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatisticModal"
          component={StatisticModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
