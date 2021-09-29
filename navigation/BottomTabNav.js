import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

// const Empty = ({ navigation }) => {
//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener("tabPress", (e) => {
//       // Prevent default behavior
//       e.preventDefault();
//     });

//     return unsubscribe;
//   }, [navigation]);
//   return null;
// };

function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
