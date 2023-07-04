import axios from '../axios'

interface Wallet {
  currencyGroup: string
  tokenSymbol: string
  decimal_point: number
  tokenType: string
  blockchain: string
  explorer: string
  listingDate: string
  blockchainName: string
  logo: string
}

interface Currency {
  currencyGroup: string
  color: string
  currencySymbol: string
  name: string
  logo: string
  decimal_point: number
  listingDate: string
  wallets: Wallet[]
}

interface ApiResponse {
  code: string
  message: string
  payload: Currency[]
}

const getWallet = async (): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    '/v2/wallet/supportedCurrencies'
  )
  return response.data
}

const MarketService = {
  getWallet
}

export default MarketService
