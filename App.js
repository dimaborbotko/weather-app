import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import OldWeather from "./components/OldWeather";
import HourlyForecast from "./components/HourlyForecast";

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
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const [font, setFont] = useState(false);

  async function getWeather(cityName) {
    setLoaded(false);
    const API = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=no&alerts=no`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getWeather("Lviv");
  }, []);

  if (font) {
    if (!loaded) {
      return (
        <LinearGradient
          style={styles.loadingCont}
          colors={["#7060f0", "#9cdbfa"]}
        >
          <ActivityIndicator color="#6f5dee" size={58} />
        </LinearGradient>
      );
    } else if (weatherData == null) {
      return (
        <View style={styles.notFound}>
          <SearchBar weatherData={weatherData} />
          <Text style={styles.textNotFound}>City not found!</Text>
        </View>
      );
    }

    return (
      <LinearGradient style={styles.container} colors={["7060f0", "#9cdbfa"]}>
        <View style={styles.searchingWeather}>
          <SearchBar getWeather={getWeather} weatherData={weatherData} />
        </View>
        <View style={styles.header}>
          <Weather weatherData={weatherData} />
        </View>
        <View style={styles.secondBlock}>
          <View style={styles.oldWeather}>
            <OldWeather weatherData={weatherData} />
          </View>
          <View style={styles.hourlyForecast}>
            <HourlyForecast weatherData={weatherData} />
          </View>
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

  // if (font) {

  // }
}

const styles = StyleSheet.create({
  loadingCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
  },
  searchingWeather: {
    flex: 0.7,
    marginBottom: 10,
  },
  header: {
    flex: 2,
  },
  secondBlock: {
    flex: 4
  },
  oldWeather: {
    flex: 1.5,
  },
  hourlyForecast: {
    flex: 2.5,
  },
  notFound: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textNotFound: {
    color: "white",
    fontFamily: "pnb",
    fontSize: 14,
  },
});
