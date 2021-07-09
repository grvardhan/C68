import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigater} from 'react-navigation'
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
export default function App() {
  return (
    <View style={styles.container}>
<AppContainer/>
    </View>
  );
}

var TabNavigater = createBottomTabNavigater({
 Transaction:{screen:TransactionScreen},
 Screen:{screen:SearchScreen}
})
const Appcontainer = createAppContainer(switchContainer)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });

