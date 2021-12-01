import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Weather from "./components/Weather";

const fonts = async () => {
  await Font.loadAsync({
    pnr: require("./fonts/ProximaNova-Regular.ttf"),
    pnsb: require("./fonts/ProximaNova-Semibold.ttf"),
    pnb: require("./fonts/ProximaNova-Bold.ttf"),
    pnt: require("./fonts/ProximaNova-ThinIt.ttf"),
  });
};

const API_KEY = "526d4889d65b48cabba160455213011";

export default function App() {
  const [font, setFont] = useState(false);

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function getWeather(cityName) {
    setLoaded(false);
    const API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=yes`;
    try {
      const response = await fetch(API);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeather("New York");
  }, []);

  if (!loaded) {
    return (
      <LinearGradient style={styles.loadingCont} colors={["#7383f2", "#a4caf5"]}>
        <ActivityIndicator color="#6f5dee" size={58} />
      </LinearGradient>
    );
  } else if (weatherData === null) {
    return <View></View>;
  }

  if (font) {
    return (
      <LinearGradient style={styles.container} colors={["#7383f2", "#a4caf5"]}>
        <View style={styles.header} >
          <Weather weatherData={weatherData} />
        </View>
        <View style={styles.oldWeather}>

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
  loadingCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 2,
    marginTop: 40,
  },
  oldWeather: {
    flex: 3
  }
});
