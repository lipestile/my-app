import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Digiteseunome() {

    const [nome, setnome] = useState('')
    const [valordigitado, setvalordigitado] = useState('')


    return (
        <View>
            <Text>Digite a porra do seu Nome</Text>
            <Text>{nome}</Text>
            <TextInput
                id='input'
                onChangeText={e => setvalordigitado(e)}

            ></TextInput>
            <Button
                title='Botão'
             onPress={() => setnome(valordigitado)} 
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({})