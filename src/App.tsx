import { useState, useEffect } from "react";
import {
  Box,
  Container
} from '@chakra-ui/react'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'
import api from './api/firestore'
import './App.css'
import { Item } from './interfaces'
import { QuerySnapshot, DocumentData } from "firebase/firestore";

function App() {
  const [items, setItems] = useState<Item[] | []>([])
  const [loading, setLoading] = useState(true)

  const getSnaptshot = (querySnapshot: QuerySnapshot<DocumentData>) => {
    let docs: Item[] = [];
    querySnapshot.forEach((doc: DocumentData) => {
      docs.push({ ...doc.data() })
    });
    setLoading(false);
    setItems(docs);
  }

  const getFBDocs = async () => {
    const querySnapshot = await api.getItems();
    getSnaptshot(querySnapshot);
  }

  useEffect(() => {
    setLoading(true);
    getFBDocs()

    const cb = (querySnapshot: QuerySnapshot<DocumentData>) => {
      getSnaptshot(querySnapshot);
    }
    const unsub = api.getOnSnapShot(cb)

    return () => {
      unsub();
      getFBDocs();
    };
  }, [])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      item: { value: string };
    };

    const inputValue = target.item.value.trim()
    if (!inputValue) return
    await api.addItem(inputValue);
    target.item.value = ''
  }

  return (
    <Container>
      <Box textAlign="center" h="100vh" maxW='lg' borderRadius='lg' overflow='hidden'>
        <Form onSubmit={handleSubmit} />
        {loading ? <h1>Loading...</h1> : items.length > 0 ? <List items={items} /> : <h1>No items</h1>}
      </Box>
    </Container>
  )
}

export default App