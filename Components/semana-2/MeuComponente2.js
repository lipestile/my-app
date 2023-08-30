import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MeuComponente2 = () => {

    const [numero, setnumero] = useState('');





    function saymyname() {
        let min = 0;
        let max = 20;
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        setnumero(numeroAleatorio)

    }



    return (
        <View>
            <Text></Text>
            <Text
                style={styles.texto}
            >{numero}</Text>
            <Button
                onPress={saymyname}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    )
}

export default MeuComponente2

const styles = StyleSheet.create({
    texto: {
        color: 'blue',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 100

    }
});
