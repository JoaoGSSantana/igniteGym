import { Button as NativeBaseButton, Text, IButtonProps } from 'native-base';

type Props = IButtonProps & {
    title: string,
    variant?: 'solid' | 'outline'
}

export function Button({ title, variant, ...rest }: Props) {
    return (
        <NativeBaseButton
            w="full"
            h={14}
            bg={variant === "outline" ? "transparent" : "green.700"}
            borderWidth={variant === "outline" ? 1 : 0}
            borderColor="green.500"
            _pressed={{
                bg: variant === "outline" ? "gray.500" : 'green.500',
            }}
            {...rest}
        >
            <Text
                color={variant === "outline" ? "green.500" : "white"}
                fontSize="sm"
                fontFamily="heading"
            >
                {title}
            </Text>
        </NativeBaseButton>
    );
}