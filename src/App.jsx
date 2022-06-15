import { useState, useEffect } from "react";
import { Form } from './components/Form/Form'
import { List } from './components/List/List'
import api from './api/firestore'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const getSnaptshot = (querySnapshot) => {
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() })
    });
    setLoading(false);
    setItems(docs);
  }

  const getFBDocs = async () => {
    const querySnapshot = await api.getItems()
    getSnaptshot(querySnapshot);
  }

  useEffect(() => {
    setLoading(true);
    getFBDocs()
    const unsub = api.getOnSnapShot(
      (snapshot) => {
        getSnaptshot(snapshot);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getFBDocs();
    };
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputValue = e.target.item.value.trim()
    if (!inputValue) return
    await api.addItem(inputValue);
    e.target.item.value = ''
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      {loading ? <h1>Loading...</h1> : items.length > 0 ? <List items={items} /> : <h1>No items</h1>}
    </div>
  )
}

export default App