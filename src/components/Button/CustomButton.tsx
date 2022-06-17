import { Button } from '@chakra-ui/react'

interface CustomButtonProps {
    variant: 'green' | 'red';
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | undefined;
    size: 'sm' | 'md' | 'lg' | 'xl';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, variant, onClick, ...props }) => {
    return (
        <Button colorScheme={variant} onClick={onClick} {...props}>
            {children}
        </Button>
    )
}
