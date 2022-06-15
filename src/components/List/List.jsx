import ListItem from './ListItem'
import api from '../../api/firestore'

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
        <ul>
            {items?.map(item => (
                <ListItem key={item.id} item={item} onStroke={handleStroke} onDelete={handleDelete} />
            ))}
        </ul>
    )
}
