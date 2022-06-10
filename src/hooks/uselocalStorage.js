import { useEffect, useState } from 'react'

export const uselocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue)

    useEffect(() => {
        if (!state.length) return

        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}