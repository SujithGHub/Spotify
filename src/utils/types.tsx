interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    style?: object,
    numberOfLines?: number,
    children: React.ReactNode;
    fontWeight?: 'font-thin' |
    'font-extralight' |
    'font-light' |
    'font-normal' |
    'font-medium' |
    'font-semibold' |
    'font-bold' |
    'font-extrabold' |
    'font-black'
}

interface ButtonProps {
    title: string,
    onPress?: () => void,
    loading?: boolean,
    disabled?: boolean,
}

interface AnimatedButtonProps {
    title: string,
    onPress?: () => void,
    loading?: boolean,
    disabled?: boolean,
    onPressIn: () => void,
    onPressOut: () => void,
}