import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import home from '../screens/bottomTabScreens/home'
const Tab = createBottomTabNavigator()

export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={home} />
    </Tab.Navigator>
  )
}
