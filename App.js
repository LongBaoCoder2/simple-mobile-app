import { SafeAreaView, Text, StyleSheet } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const AppNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNav.Navigator>
        <AppNav.Screen name="Login" component={LoginScreen} />
        <AppNav.Screen name="Home" component={HomeScreen} />
      </AppNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
