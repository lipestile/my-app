import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
  const [increment, setvalor] = useState(null)

  function incrementar(){
    // alert('Incrementar')
    setvalor(valor = increment + 1)
    console.log(valor)
  };
  function decrementar(){
    // alert('decrementar')
    setvalor(valor = increment - 1)
  };
  


  return (
    <View>
      <Text>Contadoror</Text>
      <Text>{increment}</Text>
      <Button 
      title='+'
      onPress={incrementar}
      
      ></Button>
      <Button 
      title='-'
      onPress={decrementar}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
  }
})