import React from 'react'
import { Button, Text, View } from 'react-native'

const Main = () => {
    return (
        <View>
            <Text>Main</Text>
            <Button title='Click Me' onPress={() => console.log("Pressed")}></Button>
        </View>
    )
    
}

export default Main