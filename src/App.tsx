import React, { useEffect } from 'react'
import ToggleThemeButton from './components/buttons/ToggleThemeButton'
import WalletService from './services/WalletService'
import TradeService from './services/TradeService'

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const a = async () => {
    try {
      const a = await WalletService.getSupportedCurrencies()
      console.log(a)
      const b = await TradeService.getPriceChanges()
      console.log(b)
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
