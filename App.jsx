import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import AppShell from './components/AppShell'

export default function App() {

  return ( 
  <NavigationContainer>
      <AppShell/>
    <StackNavigator/>
 </NavigationContainer>);
}