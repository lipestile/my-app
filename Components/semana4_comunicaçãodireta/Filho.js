import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filho(props) {
  return (
    <View>
      <Text>{props.nome}  {props.sobrenome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})