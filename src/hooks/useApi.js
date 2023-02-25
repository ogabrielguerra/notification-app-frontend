import { useEffect, useRef, useReducer } from 'react'

export const useApi = (url) => {
    const cacheData = useRef({})

    const initialState = {
        status: 'idle',
        error: null,
        data: [],
    }

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...initialState, status: 'fetching' }
            case 'FETCHED':
                return { ...initialState, status: 'fetched', data: action.payload }
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload }
            default:
                return state
        }
    }, initialState)

    useEffect((requestOptions={}) => {
        let revokeRequest = false
        if (!url || !url.trim()) return

        const renderData = async () => {

            dispatch({ type: 'FETCHING' })

            if (cacheData.current[url]) {
                const data = cacheData.current[url]
                dispatch({ type: 'FETCHED', payload: data })

            } else {

                try {
                    const res = await fetch(url, requestOptions);
                    const data = await res.json();
                
                    cacheData.current[url] = data
                    
                    if (revokeRequest) return
                    dispatch({ type: 'FETCHED', payload: data })

                } catch (error) {
                    if (revokeRequest) return
                    dispatch({ type: 'FETCH_ERROR', payload: error.message })

                }
            }
        }

        renderData()

        return function cleanup() {
            revokeRequest = true
        }
    }, [url])

    return state
}
