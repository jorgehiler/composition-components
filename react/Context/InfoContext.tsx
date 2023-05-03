import type { ReactChildren } from 'react'
import React, { useContext, useState } from 'react'

interface InfoContext {
  title: string
  setTitle: (currentTab: string) => void
}

const defaultState = {
  title: 'default',
  setTitle: () => {},
}

const InfoContext = React.createContext<InfoContext>(defaultState)

InfoContext.displayName = 'InfoContext'

const InfoContextProvider = ({ children }: { children: ReactChildren }) => {
  const [title, setTitle] = useState('Titulo Contexto Global')

  return (
    <InfoContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}

const useInfoContext = () => useContext(InfoContext)

InfoContextProvider.displayName = 'InfoContext'

export const InfoContextContainer = { InfoContextProvider, useInfoContext }
