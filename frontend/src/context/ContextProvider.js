import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [activeSidebar, setActiveSidebar] = useState(true);

    return (
      <StateContext.Provider value={{ activeSidebar, setActiveSidebar }}>
        {children}
      </StateContext.Provider>
    );

}

export const useStateContext = () => useContext(StateContext)