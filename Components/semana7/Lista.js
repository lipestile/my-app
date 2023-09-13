import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Lista() {
    const carro = [ 'bmw', 'ferrari', 'opel' ]
  return (
    <View>
        {carro.map((item, index) =>{
          return(
                <Text key={index} style={{fontSize: 30}}>{item}</Text>
            ) 
        })}
      {/* <FlatList
      data={carro}
      renderItem={([item]) =>
        <Text style={{fontSize: 30}}>{item}</Text>
      }
      
      ></FlatList> */}

    </View>
  )
}

const styles = StyleSheet.create({})