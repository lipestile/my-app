import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ComponenteControlado() {
    const [nome, setnome] = useState('')




    return (
        <View>
            <Text>Componente Controlado</Text>
            <Text>{nome}</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Digite seu nome'
                value={null}
                onChangeText={valorDigitado => setnome(valorDigitado)}
            >

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({})