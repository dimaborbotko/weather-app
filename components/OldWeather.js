import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function OldWeather({weatherData}) {
    const { forecast } = weatherData;
    const { forecastday } = forecast;
    const { hour } = forecastday;
    const { condition, precip_in, uv } = hour;


    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: `http:${condition.icon}`}} />
                <View>
                   <Text>Precipitation</Text>
                   <Text>{precip_in}%</Text>   
                </View>
              
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
    }
})
