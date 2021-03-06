import {
    FormControl,
    Input
} from '@chakra-ui/react'
import { CustomButton } from '../Button/CustomButton'

interface FormProps {
    onSubmit: (e: React.SyntheticEvent) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    return (
        <form className='m-top-30' onSubmit={onSubmit}>
            <FormControl display="flex" justifyContent="space-between" isInvalid={false}>
                <Input width='70%' type="text" name="item" placeholder="Add item" />
                <CustomButton variant="green" type="submit" size='sm'>Add</CustomButton>
            </FormControl>
        </form >
    )
}
