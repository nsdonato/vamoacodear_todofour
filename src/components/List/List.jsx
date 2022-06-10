import ListItem from './ListItem'

export const List = ({ items, setItems }) => {

    const handleDelete = (id) => {
        setItems((items) => items.filter(item => item.id !== id))
    }

    const handleStroke = (id) => {
        setItems((items) => items.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }

    return (
        <ul>
            {items.map(item => (
                <ListItem key={item.id} item={item} onStroke={handleStroke} onDelete={handleDelete} />
            ))}
        </ul>
    )
}
