import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ComparisonUv from "../functions/ComparisonUv";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OldWeather({ weatherData }) {
  const { forecast, current } = weatherData;
  const { forecastday } = forecast;
  const { day, hour } = forecastday[0];
  const { daily_chance_of_rain, uv, condition } = day;
  const { temp_c } = hour[22];
  const { icon } = condition;

  return (
    <View style={styles.box}>
      <Text style={styles.yestTemp}>Yesterday {temp_c}°</Text>
      <View style={styles.container}>
        <View style={styles.hourWeatherCont}>
          <MaterialCommunityIcons
            name="water-outline"
            size={35}
            color="white"
          />
          <View style={styles.precip}>
            <Text style={styles.precipText}>Precipitation</Text>
            <Text style={styles.precipNum}>{daily_chance_of_rain}%</Text>
          </View>

          <View style={styles.vertLine}></View>

          <Image style={styles.sun} source={require('../assets/113.png')}/>
          <View style={styles.uvIndex}>
            <Text style={styles.uvIndexText}>UV index</Text>
            <ComparisonUv weatherData={weatherData} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
      flex: 1,
  },
  yestTemp: {
    textAlign: "right",
    marginRight: 30,
    justifyContent: "flex-end",
    marginTop: 25,
    marginBottom: -55,
    color: "white",
    fontFamily: "pnsb",
    fontSize: 18,
  },
  container: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginTop: 60,
  },
  hourWeatherCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconHourWeather: {
    width: 50,
    height: 50,
  },
  precip: {
    marginLeft: 5,
    paddingVertical: 40,
  },

  vertLine: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    borderBottomWidth: 45,
    marginHorizontal: 25,
  },
  sun: {
    marginLeft: -15,
    marginRight: -7,
    width: 60,
    height: 60,
  },
  uvIndex: {
    marginLeft: 10,
    paddingVertical: 40,
  },
  precipNum: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 18,
  },
  precipText: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 18,
    marginBottom: 5,
  },
  uvIndexText: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 18,
    marginBottom: 5,
  },
});
