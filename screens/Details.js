import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class dataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam("data")
    };
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text style = {styles.title}>{data[0]}</Text>
        <Text style={styles.text}>{`Distance from Earth : ${data[1]}`}</Text>
        <Text style={styles.text}>{`Gravity : ${data[4]}`}</Text>
        <Text style={styles.text}>{`Mass : ${data[2]}`}</Text>
        <Text style={styles.text}>{`Radius : ${data[3]}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#9ED8DB",
    heigth:'100%',
    width:'100%'
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#1D3354",
    alignSelf:'center'
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#467599",
    alignSelf:'center'
  }
});
