import { Button } from '@chakra-ui/react'

export const CustomButton = ({ variant, children, onClick, ...props }) => {
    return (
        <Button colorScheme={variant} onClick={onClick} {...props}>
            {children}
        </Button>
    )
}
