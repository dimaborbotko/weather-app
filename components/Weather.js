import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Weather({ weatherData }) {
  const { location, current } = weatherData;
  const { temp_c, feelslike_c, condition } = current;
  const { icon, text } = condition;
  const { name, localtime } = location; // location info

  const locIcon = <Entypo name="location-pin" size={20} color="white" />;
  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.timeInfo}>
          <Text style={styles.city}>{locIcon}{name}</Text>
          <Text style={styles.date}>{localtime}</Text>
        </View>
        <View style={styles.tempInfo}>
            <Image style={styles.imgWeather} source={{uri: `http:${icon}` }}/>
            <Text style={styles.temp}>{temp_c}°</Text>
        </View>
        
        <Text style={styles.tempFeel}>Feels like {feelslike_c}°</Text>
        <Text style={styles.skyCond}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainBlock: {
    alignItems: "center",
    flex: 2,
    justifyContent: "space-evenly",
  },
  timeInfo: {
    alignItems: "center"
  },
  city: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 18,
    marginBottom: 8
  },
  date: {
      color: '#bfbfbf',
      fontFamily: 'pnr'
  },

  tempInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  imgWeather: {
      width: 75,
      height: 75,
  },
  temp: {
      fontFamily: 'pnr',
      fontSize: 75,
      color: 'white'
  },
  spanDeg: {
    fontSize: 50,
    backgroundColor: 'red'
  },
  tempFeel: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 20,
    marginBottom: 8
  },
  skyCond: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 17,
    marginBottom: 8
  }
});
