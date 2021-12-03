import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import signUp from '../screens/authScreens/SignUp'
import BottomTabNav from '../navigators/BottomTabNav'
import glass from '../../assets/glass.jpeg'

const AuthStack = createStackNavigator()

export default function AuthNav() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          im2='abc'
          options={{ headerShown: false }}
          name='signUp'
          component={signUp}
        />
        <AuthStack.Screen name='home' component={BottomTabNav} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}
