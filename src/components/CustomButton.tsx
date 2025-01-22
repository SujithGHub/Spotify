import { ButtonColors, TextColors } from '@/utils/Constants'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from './CustomText'

const CustomButton: FC<AnimatedButtonProps> = ({
    title,
    onPress,
    loading,
    disabled,
    onPressIn,
    onPressOut,
}) => {

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
            >
                <CustomText style={{color: TextColors.TEXT_WHITE}}>{title}</CustomText>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: ButtonColors.BUTTON_PRIMARY,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CustomButton