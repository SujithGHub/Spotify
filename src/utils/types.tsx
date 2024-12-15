interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    style?: object,
    numberOfLines?: number,
    children: React.ReactNode;
}

interface ButtonProps {
    title: String,
    onPress?: () => void,
    loading?: boolean,
    disabled?: boolean,
}