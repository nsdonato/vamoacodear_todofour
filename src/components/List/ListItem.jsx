import "./ListItem.css"

const ListItem = ({ item, onStroke, onDelete }) => {
    return (
        <>
            <li className={item.completed ? "stroke" : ""} onClick={() => onStroke(item.id)}>{item.value}</li>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
    )
}

export default ListItem