import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Haze : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Haze",
        subtitle : "Don't go outside."
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"],
        title : "Drizzle",
        subtitle : "subtitle is Drizzle "
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ["#00C6FB", "#005BEA"],
        title : "Rain",
        subtitle : "subtitle is Rain"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#7DE2FC", "#B9B6E5"],
        title : "Snow",
        subtitle : "subtitle is Snow"
    },
    Atmosphere : {
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"],
        title : "Atmosphere",
        subtitle : "Subtitle is Atmosphere"
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : [ "#FF7300" ,"#FEF253"],
        title : "Clear",
        subtitle : "subtitle is Clear"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC", "#304352"],
        title : "Clouds",
        subtitle : "subtitle is Clouds"
    },
    Mist : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Mist",
        subtitle : "subtitle is Mist"
    },
    Dust : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Dust",
        subtitle : "Dust"
    }
};


export default function Weather(props){
    return( <LinearGradient style={styles.container} colors={weatherOption[props.condition].gradient} >
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} name={weatherOption[props.condition].iconName} color="white"/>
                    <Text style={styles.temp}>{props.temp}</Text>
                </View>
                <View style={styles.halfTextContainter}>
                    <Text style={styles.title}>{props.city}</Text>
                    <Text style={styles.title}>{weatherOption[props.condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOption[props.condition].subtitle}</Text>
                </View>
                <View style={styles.copyright}>
                <Text style={styles.copryrightText}>LEE DO YEONG</Text>
                </View>
            </LinearGradient>
          ) 
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    temp : {
        fontSize : 42,
        color : "white"
    },
    halfContainer : { 
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontWeight : "600",
        fontSize : 24
    },
    halfTextContainter : {
        flex : 1,
        justifyContent : "center",
        paddingHorizontal : 10,
        alignItems : "center"
    },
    copyright : {
        justifyContent : "flex-end",
        alignItems : "flex-end"
    },
    copryrightText : {
        color : "white",
        fontSize : 18,
        fontWeight : "300"
    }
});