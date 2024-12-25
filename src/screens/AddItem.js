import { StyleSheet, View, Text } from "react-native";
import React from "react";

const AddItem = () => {
  return (
    <View style={styles.container}>
      <Text>AddItem Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddItem;
