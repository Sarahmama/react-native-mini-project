import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const EditScreen = ({ route }) => {
  const { user } = route.params;
  console.log(user);

  const [userState, setUser] = useState(user.username);
  const [phoneState, setPhone] = useState(user.phoneNumber);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputField}
          value={userState}
          onChangeText={(text) => setUser(text)}
          placeholder="Enter your username"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.inputField}
          value={phoneState}
          onChangeText={(text) => setPhone(text)}
          placeholder="Enter your phone number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(`Username: ${userState}, PhoneNumber: ${phoneState}`);
        }}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
    marginBottom: 8,
  },
  inputField: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  button: {
    backgroundColor: "#007AFF", // Modern blue color
    paddingVertical: 15, // Increased vertical padding
    borderRadius: 10, // Rounded corners for the button
    alignItems: "center", // Center the text
    justifyContent: "center",
    marginTop: 20, // Space above the button
    shadowColor: "#000", // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 18, // Larger font size
    fontWeight: "bold", // Bold text
    textTransform: "uppercase", // Uppercase text
    letterSpacing: 1, // Slight letter spacing
  },
});

export default EditScreen;
