import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParOuImpa(props) {
    const numero = props.numero
    let resutado = ''

    if (numero % 2 == 0){
        resutado = 'Par'
    }else{
        resutado = 'Impar'
    }
//  const resultado = numero % 2 == 0 ? 'par' : 'impa'


  return (
   
    <View>
      <Text style={{fontSize: 30}}>o numero {numero} é:</Text>
      <Text style={{fontSize: 30, color: numero % 2 == 0? 'blue' : 'red'}}>{resutado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   
})