import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntroducaoEstilos() {
  return (
    <View style={{flex: 1 ,flexDirection:'column' ,backgroundColor: 'gray', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      {/* <Text style={{flex: 1}}>TEXTO</Text>
      <Text style={{flex: 1}}>TEXTO</Text>
      <Text>TEXTO</Text> */}
      <View style={{backgroundColor: 'red', width: 40, height: 40}}>
        <Text>TEXTO</Text>
      </View>
      <View style={{backgroundColor: 'blue', width: 40, height: 40}}>
        <Text>TEXTO</Text>
      </View>
      <View style={{backgroundColor: 'green', width: 40, height: 40}}>
        <Text>TEXTO</Text>
      </View>
      <View style={{backgroundColor: 'yellow', width: 40, height: 40}}>
        <Text>TEXTO</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})