import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Filho1(props) {
    
    function aleatorio() {
        let min = 0;
        let max = 60;
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        props.funcao(numeroAleatorio)

    }
  return (
    <View>
      <Button
      title='CLICOU'
      onPress={aleatorio}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})