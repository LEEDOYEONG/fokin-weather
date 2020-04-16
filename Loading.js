<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import CircularProgress from '@material-ui/core/CircularProgress';


class Loading extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          completed : 0,
        }
      }

      componentDidMount(){
        this.timer = setInterval(this.progress, 20);
      }
    
      progress = () => {
        const {completed} = this.state;
        this.setState({completed : completed>=100? 0: completed+1});
      } 

    render(){
        return(
            <View style={styles.conatainer}>
                <StatusBar barStyle="dark-content"/>
                <Text style={styles.text}>Loading...</Text>
                <CircularProgress variant="determinate" value={this.state.completed}/>
            </View>
        ) 
    }
    
}

const styles = StyleSheet.create({
    conatainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30
    }
})

export default Loading;