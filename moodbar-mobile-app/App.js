import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppBottomNavigator from "./navigation/AppBottomNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-semiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      ></AppLoading>
    );
  }

  return (
    <NavigationContainer>
      <AppBottomNavigator />
    </NavigationContainer>
  );
}
