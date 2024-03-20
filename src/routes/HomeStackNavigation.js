import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Detalhes from '../pages/Detalhes'
import Home from '../pages/Home'

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='detalhes' component={Detalhes}/>
    </Stack.Navigator>
  )
}