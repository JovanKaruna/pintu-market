import React, { useEffect, useState } from 'react'
import WalletService from '../services/WalletService'
import TradeService from '../services/TradeService'
import MarketTable from '../components/tables/MarketTable'
import { useQuery } from 'react-query'
import {
  type PriceChangesItem,
  type Currency,
  type MarketTableData
} from '../types'

const Market = (): JSX.Element => {
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [prices, setPrices] = useState<PriceChangesItem[]>([])
  const [data, setData] = useState<MarketTableData[]>([])

  const { isLoading: isLoadingSupportedCurrencies } = useQuery(
    ['query-currencies'],
    async () => {
      const data = await WalletService.getSupportedCurrencies()
      setCurrencies(data.payload)
    }
  )

  const { isLoading: isLoadingPrice } = useQuery(
    ['query-prices'],
    async () => {
      const data = await TradeService.getPriceChanges()
      setPrices(data.payload)
    },
    {
      refetchInterval: 10000
    }
  )

  const createMarketTableData = (
    prices: PriceChangesItem[],
    currencies: Currency[]
  ): MarketTableData[] => {
    const data: MarketTableData[] = []
    prices.forEach((price) => {
      const tokenName = price.pair.split('/')[0]
      const currency = currencies.find(
        (currency) =>
          currency.currencySymbol.toUpperCase() === tokenName.toUpperCase()
      )
      if (currency !== undefined) {
        data.push({
          logo: currency.logo,
          currencySymbol: currency.currencySymbol,
          name: currency.name,
          latestPrice: price.latestPrice,
          day: price.day,
          week: price.month,
          month: price.month,
          year: price.year
        })
      }
    })
    return data
  }

  useEffect(() => {
    if (currencies.length > 0 && prices.length > 0) {
      setData(createMarketTableData(prices, currencies))
    }
  }, [currencies, prices])

  return (
    <div className="">
      <div>
        <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">
          Harga Crypto dalam Rupiah Hari Ini
        </div>
      </div>
      {isLoadingSupportedCurrencies || isLoadingPrice ? (
        <div className="min-h-60vh flex justify-center items-center">
          <div className="loader w-10 h-10"></div>
        </div>
      ) : (
        <MarketTable data={data} />
      )}
    </div>
  )
}

export default Market
