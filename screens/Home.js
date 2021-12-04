import React, { Component } from "react";
import {View,Text,FlatList,StyleSheet,Alert,SafeAreaView} from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      url: "http://localhost:5000/"
    };
  }

  componentDidMount() {
    this.getStars();
  }

  getStars = () => {
    const { url } = this.state;
    axios.get(url).then(response => {
        console.log(response.data[0].Data)
        return this.setState({
          listData: response.data[0].Data
        });
      }).catch(error => {
        Alert.alert(error.message);
      });
  };

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress = {()=>this.props.navigation.navigate("Details", {data:item})}
      style = {styles.listContainer}
    >
      <Text style = {styles.title} >{item[0]}</Text>
    </TouchableOpacity>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { listData } = this.state;

    if (listData.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.upperContainer}>
          <Text style={styles.headerText}>STARS APP</Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.listData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ED8DB",
    height:'100%',
    width:'100%'
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20,
    marginBottom:20
  },
  lowerContainer:{
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop:60,
    marginBottom:20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1D3354"
  },
  emptyContainerText: {
    fontSize: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E9FFF9",
    alignSelf:'center'
  },
  listContainer: {
    backgroundColor: "#467599",
    width:'80%',
    height:'100%',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:20,
    borderColor:'#1D3354',
    borderWidth:2
  }
});
