import { useEffect, useState } from 'react'
import { Item } from '../interfaces'

export const uselocalStorage = (key: string, initialValue: Item[] | []) => {
    const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key) as string) || initialValue)

    useEffect(() => {
        if (!state.length) return

        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}