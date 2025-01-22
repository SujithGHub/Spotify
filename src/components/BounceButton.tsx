import React, { useRef } from 'react';
import { Animated, TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';

const BounceButton = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2, // Scale up to 1.2x
      useNativeDriver: true,
      friction: 2, // Adjust "bounciness"
    }).start()
    // Animated.sequence([
    //   Animated.spring(scaleValue, {
    //     toValue: 1.2, // Scale up to 1.2x
    //     useNativeDriver: true,
    //     friction: 2, // Adjust "bounciness"
    //   }),
    //   Animated.spring(scaleValue, {
    //     toValue: 1, // Scale back to normal size
    //     useNativeDriver: true,
    //     friction: 2, // Adjust "bounciness"
    //   }),
    // ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={[styles.button, { transform: [{ scale: scaleValue }] }]}
        >
          <Text style={styles.text}>Bounce Me!</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    borderWidth: 2
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // Add shadow on Android
    height: 100
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BounceButton;
