import { collection, addDoc } from "firebase/firestore";
import { Form } from './components/Form/Form'
import { List } from './components/List/List'
import { useFirestore } from './hooks/useFirestore'
import db from './utils/firebaseConfig';
import './App.css'

function App() {
  const [items, setItems] = useFirestore('tasks', [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputValue = e.target.item.value.trim()
    if (!inputValue) return

    await addDoc(collection(db, "tasks"), { value: inputValue, completed: false });

    e.target.item.value = ''
  }

  console.log(items)
  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <List items={items} setItems={setItems} />
    </div>
  )
}

export default App
