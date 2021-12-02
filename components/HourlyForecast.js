import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HourlyForecast({ weatherData }) {
  const { forecast, current } = weatherData;
  const { forecastday } = forecast;
  const { hour } = forecastday[0];
  // const { chance_of_rain, uv, condition, time, condition } = hour[0];
  // const { icon } = condition
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hourly</Text>
      <View style={styles.main}>
        <View style={styles.hourCondition}>
          <Text style={styles.timeToday}>{hour[8].time.slice(-5)} am</Text>
          <View style={styles.skyCondition}>
            <Image style={styles.forecastImg} source={{uri: `http:${hour[8].condition.icon}`}}/>
            <Text style={styles.precipHour}>{hour[8].chance_of_rain}%</Text>
          </View>
        </View>
        <View style={styles.hourCondition}>
          <Text style={styles.timeToday}>{hour[11].time.slice(-5)} am</Text>
          <View style={styles.skyCondition}>
            <Image style={styles.forecastImg} source={{uri: `http:${hour[11].condition.icon}`}}/>
            <Text style={styles.precipHour}>{hour[11].chance_of_rain}%</Text>
          </View>
        </View>
        <View style={styles.hourCondition}>
          <Text style={styles.timeToday}>{hour[14].time.slice(-5)} pm</Text>
          <View style={styles.skyCondition}>
            <Image style={styles.forecastImg} source={{uri: `http:${hour[14].condition.icon}`}}/>
            <Text style={styles.precipHour}>{hour[14].chance_of_rain}%</Text>
          </View>
        </View>
        <View style={styles.hourCondition}>
          <Text style={styles.timeToday}>{hour[17].time.slice(-5)} pm</Text>
          <View style={styles.skyCondition}>
            <Image style={styles.forecastImg} source={{uri: `http:${hour[17].condition.icon}`}}/>
            <Text style={styles.precipHour}>{hour[17].chance_of_rain}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    marginLeft: 20,
    color: 'white',
    fontFamily: 'pnb',
    fontSize: 14,
    marginVertical: 6
  },
  main: {
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hourCondition: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10

  },
  timeToday: {
    color: 'white',
    fontFamily: 'pnb',
    fontSize: 16
  },
  skyCondition: {
    alignItems: "center",
  },
  forecastImg: {
    height: 50,
    width: 50
  },
  precipHour: {
    color: 'white',
    fontFamily: 'pnsb',
    fontSize: 12
  }
});
