import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Filho1 from './Filho1'

export default function Pai1() {
    const [numero, setnumero] = useState('');
    function numeroAle(valor){
        setnumero(valor)
    }

  return (
    <View>
      <Text>Número Aleatório é ?</Text>
      <Text>{numero}</Text>
      <Filho1 min='1' max='60' funcao={numeroAle}></Filho1>
    </View>
  )
}

const styles = StyleSheet.create({})