import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import ExpoTHREE from 'expo-three';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { fbValue: "" };   // Value from firebase

    var config = {
      apiKey: "AIzaSyCkKl031vVEWN_HyAC2taLW6tnaYc8U2Ag",
      authDomain: "expo-three-temp.firebaseapp.com",
      databaseURL: "https://expo-three-temp.firebaseio.com",
      projectId: "expo-three-temp",
      storageBucket: "expo-three-temp.appspot.com",
      messagingSenderId: "265622712819"
    };
    firebase.initializeApp(config);


    firebase.database().ref("test").on("value", function(snapshot) {
      console.log("Got Data", snapshot.val());
      this.setState({ fbValue: snapshot.val() });
    }.bind(this), function(error) { console.log(error); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Got the value: {this.state.fbValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
