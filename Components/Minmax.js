import React from 'react'
import { Text } from 'react-native'

export default function Minmax(props)
{
    const {maximo, minimo} = props;
     
    const maxvalue = Math.max(parseInt(minimo), parseInt(maximo));
    

    return (
        <Text>
            O valor maximo :{maxvalue}
        </Text>
    )
}


