import React, { useEffect } from 'react'
import WalletService from '../services/WalletService'
import TradeService from '../services/TradeService'
import MarketTable from '../components/tables/MarketTable'

const Market = (): JSX.Element => {
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
    <div className="">
      <div>
        <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">
          Harga Crypto dalam Rupiah Hari Ini
        </div>
      </div>
      <MarketTable />

      {/* <div className="min-h-60vh flex justify-center items-center">
        <div className="loader w-10 h-10"></div>
      </div> */}
    </div>
  )
}

export default Market
