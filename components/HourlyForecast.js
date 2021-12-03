import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HourlyForecast({ weatherData }) {
  const { forecast } = weatherData;
  const { forecastday } = forecast;
  const { hour } = forecastday[0];
  const absM = (n) => {
    return Math.abs(hour[n].temp_c);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hourly</Text>
      <View style={styles.contBtn}>
        <View style={styles.main}>
          <View style={styles.hourCondition}>
            <Text style={styles.timeToday}>{hour[8].time.slice(-5)} am</Text>
            <View style={styles.skyCondition}>
              <Image
                style={styles.forecastImg}
                source={{ uri: `http:${hour[8].condition.icon}` }}
              />
              <Text style={styles.precipHour}>{hour[8].chance_of_rain}%</Text>
            </View>
            <View style={styles.flexDirection}></View>
            <View style={styles.grafikTemt}>
              <Text style={styles.temtHour}>{hour[8].temp_c}°</Text>
            </View>
            <View
              style={{
                ...styles.borderLW,
                borderBottomWidth: Math.abs(absM(8)) * 2,
              }}
            ></View>
          </View>
          <View style={styles.hourCondition}>
            <Text style={styles.timeToday}>{hour[11].time.slice(-5)} am</Text>
            <View style={styles.skyCondition}>
              <Image
                style={styles.forecastImg}
                source={{ uri: `http:${hour[11].condition.icon}` }}
              />
              <Text style={styles.precipHour}>{hour[11].chance_of_rain}%</Text>
            </View>
            <View style={styles.flexDirection}></View>
            <View style={styles.grafikTemt}>
              <Text style={styles.temtHour}>{hour[11].temp_c}°</Text>
            </View>
            <View
              style={{
                ...styles.borderLW,
                borderBottomWidth: Math.abs(absM(11)) * 2,
              }}
            ></View>
          </View>
          <View style={styles.hourCondition}>
            <Text style={styles.timeToday}>{hour[14].time.slice(-5)} pm</Text>
            <View style={styles.skyCondition}>
              <Image
                style={styles.forecastImg}
                source={{ uri: `http:${hour[14].condition.icon}` }}
              />
              <Text style={styles.precipHour}>{hour[14].chance_of_rain}%</Text>
            </View>
            <View style={styles.flexDirection}></View>
            <View style={styles.grafikTemt}>
              <Text style={styles.temtHour}>{hour[14].temp_c}°</Text>
            </View>
            <View
              style={{
                ...styles.borderLW,
                borderBottomWidth: Math.abs(absM(14)) * 2,
              }}
            ></View>
          </View>
          <View style={styles.hourCondition}>
            <Text style={styles.timeToday}>{hour[17].time.slice(-5)} pm</Text>
            <View style={styles.skyCondition}>
              <Image
                style={styles.forecastImg}
                source={{ uri: `http:${hour[17].condition.icon}` }}
              />
              <Text style={styles.precipHour}>{hour[17].chance_of_rain}%</Text>
            </View>
            <View style={styles.flexDirection}></View>
            <View style={styles.grafikTemt}>
              <Text style={styles.temtHour}>{hour[17].temp_c}°</Text>
            </View>
            <View
              style={{
                ...styles.borderLW,
                borderBottomWidth: Math.abs(absM(17)) * 2,
              }}
            ></View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnHour}
          activeOpacity={0.7}
          style={styles.btnHours}
        >
          <View style={styles.boxText}>
            <Text style={styles.btnText}>48 hours</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: 20,
    color: "white",
    fontFamily: "pnb",
    fontSize: 14,
    marginVertical: 6,
  },
  contBtn: {
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    height: '85%'
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: '85%'
  },
  hourCondition: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  timeToday: {
    color: "white",
    fontFamily: "pnb",
    fontSize: 16,
  },
  skyCondition: {
    alignItems: "center",
    marginTop: 1,
  },
  flexDirection: {
    flex: 1,
  },
  forecastImg: {
    height: 50,
    width: 50,
  },
  precipHour: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 12,
    marginTop: -3,
  },
  grafikTemt: {
    marginTop: 10,
  },
  temtHour: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 16,
    alignSelf: "flex-start"
  },
  borderLW: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 5,
    maxHeight: 100
  },
  boxText: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 2,
    textAlign: "center",
    color: "white",
    fontFamily: "pnsb",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
  },
});
