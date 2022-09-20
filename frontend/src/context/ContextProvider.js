import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [activeSidebar, setActiveSidebar] = useState(true);
    const [activeSidebarItem, setActiveSidebarItem] = useState(true);

    return (
      <StateContext.Provider
        value={{
          activeSidebar,
          setActiveSidebar,
          activeSidebarItem,
          setActiveSidebarItem,
        }}
      >
        {children}
      </StateContext.Provider>
    );

}

export const useStateContext = () => useContext(StateContext)