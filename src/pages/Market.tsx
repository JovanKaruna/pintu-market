import React, { useEffect, useState } from 'react'
import WalletService from '../services/WalletService'
import TradeService from '../services/TradeService'
import MarketTable from '../components/tables/MarketTable'
import { useQuery } from 'react-query'
import {
  type PriceChangesItem,
  type Currency,
  type MarketTableData,
  type DropdownOption
} from '../types'
import Layout from '../components/Layout'
import { Dropdown } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Market = (): JSX.Element => {
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [prices, setPrices] = useState<PriceChangesItem[]>([])
  const [data, setData] = useState<MarketTableData[]>([])
  const [searchOption, setSearchOption] = useState<DropdownOption[]>([])

  const navigate = useNavigate()

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
      refetchInterval: 5000
    }
  )

  const createMarketTableData = (
    currencies: Currency[],
    prices: PriceChangesItem[]
  ): MarketTableData[] => {
    const data: MarketTableData[] = []
    currencies.forEach((currency) => {
      const price = prices.find(
        (price) =>
          currency.currencySymbol.toUpperCase() ===
          price.pair.split('/')[0].toUpperCase()
      )
      if (price !== undefined) {
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

  const createSearchableData = (currencies: Currency[]): DropdownOption[] => {
    const data: DropdownOption[] = []
    currencies.forEach((currency) => {
      data.push({
        key: currency.currencySymbol,
        text: currency.name,
        value: currency.currencySymbol,
        image: {
          avatar: true,
          src: currency.logo
        }
      })
    })
    return data
  }

  useEffect(() => {
    if (currencies.length > 0 && prices.length > 0) {
      setData(createMarketTableData(currencies, prices))
    }
  }, [currencies, prices])

  useEffect(() => {
    if (currencies.length > 0) {
      setSearchOption(createSearchableData(currencies))
    }
  }, [currencies])

  return (
    <Layout>
      <div className="block sm:flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-black dark:text-white sm:pb-0 pb-5">
          Harga Crypto dalam Rupiah Hari Ini
        </div>
        <Dropdown
          onChange={(e, data) => {
            navigate(`/market/${(data.value as string).toLowerCase()}`)
          }}
          placeholder="Cari aset di Pintu..."
          search
          selection
          scrolling
          options={searchOption}
        />
      </div>
      {isLoadingSupportedCurrencies || isLoadingPrice ? (
        <div className="min-h-60vh flex justify-center items-center">
          <div className="loader w-10 h-10"></div>
        </div>
      ) : (
        <MarketTable data={data} />
      )}
    </Layout>
  )
}

export default Market
