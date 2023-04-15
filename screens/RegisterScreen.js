import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import authRequest from "../api/authRequest";
import { showError, showSuccess } from "../service/Toast";

const RegisterScreen = ({ navigation }) => {
  const drinkCoffeeImage = require("../assets/icon.png");
  // const { height } = useWindowDimensions();

  const [email, setEmail] = React.useState("");
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
          paddingTop: 10,
          // paddingTop: height * 0.1;
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
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Register</Text>
        </View>
        <View style={{ ...styles.inputForm, flex: 1 }}>
          <Text style={{ fontSize: 17, paddingHorizontal: 10 }}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            value={email}
            onChangeText={setEmail}
            multiline={false}
            textContentType="email"
          />
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
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={() => {
            const registerResponse = authRequest.registerRequest({
              username,
              email,
              password,
            });
            if (registerResponse) {
              showSuccess("SignUp Success. Please Login");
              navigation.navigate("Login");
            } else {
              showError("User is existing!");
            }
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 300 }}>
            Sign up
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
          <Text style={{ fontSize: 17 }}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Log In</Text>
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
    marginBottom: 20,
  },
  input: {
    marginTop: 5,
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

export default RegisterScreen;
