import React from 'react'
import ToggleThemeButton from './components/buttons/ToggleThemeButton'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black-light">
      <h1 className="text-3xl font-bold underline text-black dark:text-white">
        Pintu Market App
      </h1>
      <ToggleThemeButton />
    </div>
  )
}

export default App
