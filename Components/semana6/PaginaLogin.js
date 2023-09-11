import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function PaginaLogin() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/illust2.png')} ></Image>

            <Text style={{
                color: 'white', fontSize: 27, fontWeight: 'bold'
            }}> Welcome Back</Text>

            <TextInput
                label="Email"
                mode="outlined"
                style={{ width: '80%', backgroundColor: 'none', }}
            >
            </TextInput>
            <TextInput
                 mode='outlined'
                 label="Password"
                 secureTextEntry
                 style={{ width: '80%', marginTop: 20, backgroundColor: 'none' }}

            >
            </TextInput>
            <Button
             mode='contained'
             style={{backgroundColor: 'green', width: '80%',  marginTop: 20}}
            
            > Login </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0171',
        width: '100%',
        height: '100%'
    }
})