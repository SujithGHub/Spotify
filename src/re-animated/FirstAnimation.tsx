import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const FirstAnimation = () => {

  const width = useSharedValue(100);

  const handleExpand = () => {
    width.value = withSpring(width.value + 50);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, }}>
      <Animated.View style={[styles.box, { width }]} />
      <Button onPress={() => handleExpand()} title='Click to Expand' />
    </View>
  )
}

export default FirstAnimation;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    backgroundColor: 'purple',
    height: 100
  }
})