import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Familia(props) {
  return (
    <View>
      <Text>Familia</Text>
      <View>
        {props.childrem}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})