import axios from '../axios'
import { type SupportedCurrenciesResponseBody } from '../types'

const getSupportedCurrencies =
  async (): Promise<SupportedCurrenciesResponseBody> => {
    const response = await axios.get<SupportedCurrenciesResponseBody>(
      '/v2/wallet/supportedCurrencies'
    )
    return response.data
  }

const WalletService = {
  getSupportedCurrencies
}

export default WalletService
