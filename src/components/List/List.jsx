import ListItem from './ListItem'
import api from '../../api/firestore'
import { Divider } from '@chakra-ui/react'

export const List = ({ items }) => {

    const handleDelete = async (id) => {
        try {
            await api.deleteItem(id);
        } catch (err) {
            console.log(err);
        }
    }

    const handleStroke = async (id) => {
        try {
            const item = items.find(item => item.id === id)
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
