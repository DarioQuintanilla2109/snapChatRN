import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonActions } from '@react-navigation/native'
import glass from '../../../assets/glass.jpeg'

export default function SignUp({ navigation, route }) {
  //const { number } = route.params
  //console.log(number)
  const [num, setNum] = useState(null)
  const [newv, setNewV] = useState(null)

  useEffect(() => {
    console.log(num, 'inside use effect')
  }, [navigation])

  console.log(newv, 'sign up screen')

  const register = () => {
    navigation.navigate('home')
  }

  return (
    <ImageBackground style={styles.img} source={glass} resizeMode='cover'>
      <SafeAreaView style={styles.container}>
        <Text>{num}</Text>
        <TouchableOpacity onPress={register}>
          <Text style={{ marginBottom: 30 }}>navigate to bottom tab</Text>
          <Button
            title='Reset navigation state'
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'signUp',
                      params: { newv: setNewV(20) },
                    },
                  ],
                })
              )
            }
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
})
