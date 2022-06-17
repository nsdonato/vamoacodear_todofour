import { CustomButton } from '../Button/CustomButton';
import { Flex } from '@chakra-ui/react'
import "./ListItem.css"
import { Item } from '../../interfaces'

interface PropsLisItem {
    item: Item;
    onStroke: (id: string) => void;
    onDelete: (id: string) => void;
}

const ListItem = ({ item, onStroke, onDelete }: PropsLisItem) => {
    return (
        <Flex w="100%" justify="space-between" alignItems="baseline">
            <li className={item.completed ? "stroke" : ""} onClick={() => onStroke(item.id)}>{item.value}</li>
            <CustomButton variant='red' onClick={() => onDelete(item.id)} size='sm'>Delete</CustomButton>
        </Flex>
    )
}

export default ListItem