
export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="item" placeholder="Add item" />
            <button type="submit">Add</button>
        </form>
    )
}
