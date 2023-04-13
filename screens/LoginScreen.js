import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  const drinkCoffeeImage = require("../assets/undraw_Drink_coffee_d4l1.png");

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardDismissMode="none"
        contentContainerStyle={{
          flexGrows: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        <View style={{ width: 130, height: 130 }}>
          <Image
            source={drinkCoffeeImage}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              alignItems: "center",
            }}
          />
        </View>
        <View style={{ marginBottom: 20, flex: 1 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome Back</Text>
        </View>
        <View style={{ ...styles.inputForm, flex: 1 }}>
          <Text style={{ fontSize: 17, paddingHorizontal: 10 }}>
            Username :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username..."
            value={username}
            onChangeText={setUsername}
            multiline={false}
          />
        </View>
        <View style={{ ...styles.inputForm, flex: 1 }}>
          <Text style={{ fontSize: 17, paddingHorizontal: 10 }}>
            Password :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            value={password}
            onChangeText={setPassword}
            multiline={false}
            secureTextEntry={true}
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 290,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#070A52", fontSize: 15, fontWeight: 400 }}>
            Forgot your password...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 300 }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            marginTop: 20,
            borderColor: "transparent",
            borderTopColor: "#ccc",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17 }}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputForm: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 5,
    width: 290,
  },
  submitButton: {
    marginTop: 10,
    width: 250,
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: "0.5",
    shadowOffset: {
      width: 20,
      heigth: 100,
    },
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
