// Cria o camando de trabalho rnfs
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Botão() {

  function executarBotao2() {
    alert('Botao 2')
  }


  return (
    <View>
      <Text>Botões</Text>
      <Button
      title='Botão 1'
      onPress={() => alert('Botão 1')}
      ></Button>

      <Button
      title='Botão 2'
      onPress={executarBotao2}
      ></Button>

      <Button
      title='Botão 3'
      onPress={
        function executarBotao3(){
          alert('Botao 3')
        }
      }
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})