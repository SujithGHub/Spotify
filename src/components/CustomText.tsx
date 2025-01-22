import React, { FC } from 'react'
import { Text, View } from 'react-native'

const fontSize = {
  h1: 24, h2: 22, h3: 20, h4: 18, h5: 16, h6: 14
}

const CustomText: FC<TextProps> = ({
  variant = 'h6',
  style,
  children,
  numberOfLines
}) => {

  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={[style, { fontSize: fontSize[variant], width: '100%' }]}
      >
        {children}
      </Text>
    </View>
  )
}

export default CustomText;