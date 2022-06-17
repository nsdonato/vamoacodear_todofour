import ListItem from './ListItem'
import api from '../../api/firestore'
import { Divider } from '@chakra-ui/react'
import { Item } from '../../interfaces'

interface PropList {
    items: Item[];
}

export const List: React.FC<PropList> = ({ items }) => {

    const handleDelete = async (id: string) => {
        try {
            await api.deleteItem(id);
        } catch (err) {
            console.log(err);
        }
    }

    const handleStroke = async (id: string) => {
        try {
            const item = items.find(item => item.id === id) as Item
            await api.updateItem(item)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ul className="m-top-30">
            {items?.map(item => (
                <div key={item.id}>
                    <ListItem item={item} onStroke={handleStroke} onDelete={handleDelete} />
                    <Divider />
                </div>
            ))}
        </ul>
    )
}
