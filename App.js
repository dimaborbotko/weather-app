import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

const fonts = async () => {
  await Font.loadAsync({
    pnr: require("./fonts/ProximaNova-Regular.ttf"),
    pnsb: require("./fonts/ProximaNova-Semibold.ttf"),
    pnb: require("./fonts/ProximaNova-Bold.ttf"),
    pnt: require("./fonts/ProximaNova-ThinIt.ttf"),
  });
};

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <LinearGradient style={styles.container} colors={["#7383f2", "#a4caf5"]}>
        <View style={styles.header}>
          <Text style={styles.title}>Weather App</Text>
        </View>
      </LinearGradient>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontFamily: 'pnb',
  },
});
