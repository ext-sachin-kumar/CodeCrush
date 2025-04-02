import { createContext, useState } from "react";

export const RoutingContext = createContext({
  activeLink: "About me",
  onClickRoutes: () => {}
})

export default function RoutingContextProvider({children}) {
  const [activeLink, setActiveLink] = useState('About me')

  function handleRoutes(route) {
    setActiveLink(() => {
      return route
    })
  }

  const contextValue = {
    activeLink,
    onClickRoutes: handleRoutes,
  };
  

  return (
    <RoutingContext.Provider value={contextValue}>
      {children}
    </RoutingContext.Provider>
  )
}