import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export enum Colors {
    PRIMARY_BLACK = '#121212',
    SECONDARY_BLACK = '#212121',
    TERTIARY_BLACK = '#535353',
    TEXT_WHITE = '#FFFFF',
    SECONDAY_TEXT_GREY = ' #808080',
    BACKGROUND_BLACK = '#121212',
}

export enum ButtonColors {
    BUTTON_PRIMARY = '#3B82F6',
    BUTTON_SECONDARY_BLACK = '#212121',
    BUTTON_TERTIARY_BLACK = '#535353',
}

export enum TextColors {
    TEXT_WHITE = '#FFF',
    TEXT_GREY = ' #808080',
    TEXT_BLACK = '#121212',
}