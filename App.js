import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './app/routes';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <RootNavigator/>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
