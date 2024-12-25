import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditScreen from "../screens/EditScreen";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScren" component={Profile} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
