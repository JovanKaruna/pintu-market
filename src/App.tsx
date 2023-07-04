import React, { useEffect } from 'react'
import ToggleThemeButton from './components/buttons/ToggleThemeButton'
import MarketService from './services/MarketService'

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const a = async () => {
    try {
      const a = await MarketService.getWallet()

      console.log(a)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    a()
  }, [])

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
