import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonActions } from '@react-navigation/native'

export default function home({ navigation }) {
  const [num, setNum] = useState(4)
  useEffect(() => {
    console.log('bottom tab loaded')
    console.log(num)
  }, [])

  console.log(num)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home sceen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
      <Button
        title='Reset navigation state'
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'signUp',
                  params: { number: 5 },
                },
              ],
            })
          )
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
