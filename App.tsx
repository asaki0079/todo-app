import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <Text> 123</Text>
      <TextInput />
      <TextInput />
      <TouchableOpacity> </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
