import "react-native-gesture-handler";
import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import ProfileSetupNavigator from "./navigation/ProfileSetupNavigator"; // Đường dẫn tới file AppNavigator
import { View } from "react-native";

const App = () => {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <ProfileSetupNavigator />
      </View>
    </AuthProvider>
  );
};

export default App;
