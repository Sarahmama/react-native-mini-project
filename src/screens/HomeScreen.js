import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import items from "../data/items";

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        {/* <View> */}
        {items.map((item) => {
          return (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image
                source={{ uri: item.ItemImage }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              />
              <Text>{item.ItemName}</Text>
              <Text>{item.ItemPrice}</Text>
            </TouchableOpacity>
          );
        })}
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 90,
  },
  card: {
    margin: 5,
    padding: 10,
    backgroundColor: "#edede9",
    borderRadius: 20,
    width: "45%",
  },
});
export default HomeScreen;
