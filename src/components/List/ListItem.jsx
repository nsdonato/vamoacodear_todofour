import { CustomButton } from '../Button/CustomButton';
import { Flex } from '@chakra-ui/react'
import "./ListItem.css"

const ListItem = ({ item, onStroke, onDelete }) => {
    return (
        <Flex w="100%" justify="space-between" alignItems="baseline">
            <li className={item.completed ? "stroke" : ""} onClick={() => onStroke(item.id)}>{item.value}</li>
            <CustomButton variant='red' onClick={() => onDelete(item.id)} size='sm'>Delete</CustomButton>
        </Flex>
    )
}

export default ListItem