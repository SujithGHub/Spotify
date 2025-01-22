import BounceButton from '@/components/BounceButton';
import CustomButton from '@/components/CustomButton';
import CustomText from '@/components/CustomText';
import FirstAnimation from '@/re-animated/FirstAnimation';
import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

const Main = () => {

    const width = useSharedValue<number>(0);

    const onPress = () => {
        console.log("Pressed!")
    }

    const onPressIn = () => {

    }

    const onPressOut = () => {

    }


    return (
        // <View style={{ margin: 20 }}>
        //     <CustomText variant='h1'>This is the main text</CustomText>
        //     <CustomButton
        //         onPressIn={onPressIn}
        //         onPressOut={onPressOut}
        //         title="I'm a Animated Button"
        //         onPress={onPress}
        //     />
        //     </View>
        // <BounceButton />
        <FirstAnimation />
    );
};

export default Main;