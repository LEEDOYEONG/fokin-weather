import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = "ba8b6d2f2aa9f24936eba4f1af8e99c1";

 class App extends React.Component {

  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log(data);
    this.setState({
      isLoading : false,
      temp : data.main.temp,
      condition : data.weather[0].main,
      city : data.name
    })
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();
      this.getWeather(coords.latitude, coords.longitude);
    }catch(error){
      alert("hhh");
    }

    
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition, city} = this.state;

    return(
      isLoading ? <Loading/> : <Weather condition={condition} temp={Math.round(temp)} city={city}  />
    )
  }
}

export default App;