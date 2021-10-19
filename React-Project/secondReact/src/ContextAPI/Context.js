import React, {createContext, useState} from 'react'

export const NameContext = createContext();

export function NameProvider(props) {

    const [name, setName] = useState('Context Api worked...')

    return (
        <>
            <NameContext.Provider value={[name, setName]}>
                {props.children}
            </NameContext.Provider>
        </>
    )
}