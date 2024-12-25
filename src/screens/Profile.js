import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeNavigation from "../navigations/HomeNavigation";
import users from "../data/users";

const Profile = () => {
  const navigation = useNavigation(); // Correct usage of useNavigation

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile Screen</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit", { user: users[0] })}
          >
            <Ionicons name="create-outline" size={30} color="#003049" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        {/* <View> */}

        <View key={users[0].id} style={styles.card}>
          <Text style={styles.text}>Username: {users[0].username}</Text>
          <Text style={styles.text}>phoneNumber: {users[0].phoneNumber}</Text>
        </View>

        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#003049",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    margin: 5,
    padding: 20,
    backgroundColor: "#003049",
    borderRadius: 20,
    width: "80%",
    height: 300,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Profile;
