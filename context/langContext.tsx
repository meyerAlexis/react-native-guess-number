import React, { createContext, useState } from "react";

const defaultState = "";
export const Context = createContext(defaultState);

const ContextProvider = (props: { children: any }) => {
    const [lang, setLang] = useState('EN');


    const toggleLang = (changeLang: string) => {
        setLang(changeLang);
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;