import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function Footer() {


    return (
        <View style={styles.container}>
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        paddingTop: '100%'
      
    },
  });

