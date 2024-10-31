import "react-native-gesture-handler";
import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import ProfileSetupNavigator from "./navigation/ProfileSetupNavigator"; // Đường dẫn tới file AppNavigator
import SearchScreen from "./screens/SearchScreen/SearchScreen"; // Đường dẫn tới file AppNavigator
import { View } from "react-native";

const App = () => {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <ProfileSetupNavigator />
        {/* <SearchScreen /> */}
      </View>
    </AuthProvider>
  );
};

export default App;
