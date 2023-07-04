import { formatRupiah, isMinus } from '../utils'

it('should successfully format number into rupiah', () => {
  const number = '43172381'
  const expectedResult = 'Rp 43.172.381'

  const resultOfFormatRupiah = formatRupiah(number)

  expect(resultOfFormatRupiah).toEqual(expectedResult)
})

it('should return true if string has minus', () => {
  expect(isMinus('4.5')).toEqual(false)
  expect(isMinus('-10.0')).toEqual(true)
})
