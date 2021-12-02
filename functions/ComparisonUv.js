import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ComparisonUv({ weatherData }) {
  const { forecast } = weatherData;
  const { forecastday } = forecast;
  const { hour } = forecastday[0];
  const { uv } = hour[0];

  if (uv <= 2) {
    return <Text style={styles.uvDegText}>Low</Text>;
  } else if (uv <= 5) {
    return <Text style={styles.uvDegText}>Medium</Text>;
  } else if (uv <= 7) {
    return <Text style={styles.uvDegText}>Hight</Text>;
  } else if (uv <= 10) {
    return <Text style={styles.uvDegText}>Very Hight</Text>;
  } else if (uv > 11) {
    return <Text style={styles.uvDegText}>Overhight</Text>;
  }
}

const styles = StyleSheet.create({
    uvDegText: {
        color: 'white',
        fontFamily: 'pnsb',
        fontSize: 18
    }
});
