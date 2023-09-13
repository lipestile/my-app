import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper'

export default function ReactpaperText() {
    return (
        <View>
            <ActivityIndicator animating={true} style={{ marginTop: 200 }} color={MD2Colors.red800} />
            <Button icon="reddit" mode="contained" onPress={() => console.log('Pressed')}>
                
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})