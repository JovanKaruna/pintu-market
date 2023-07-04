import React from 'react'
import { Table, Segment } from 'semantic-ui-react'

const MarketTable = (): JSX.Element => {
  return (
    <Segment className="overflow-x-scroll lg:overflow-x-visible" basic>
      <Table className="min-w-80vh" padded="very" compact unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>CRYPTO</Table.HeaderCell>
            <Table.HeaderCell>HARGA</Table.HeaderCell>
            <Table.HeaderCell>24 JAM</Table.HeaderCell>
            <Table.HeaderCell>1 MGG</Table.HeaderCell>
            <Table.HeaderCell>1 BLN</Table.HeaderCell>
            <Table.HeaderCell>1 THN</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <div className="w-full flex justify-between">
                <div>
                  <img
                    src={
                      'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg'
                    }
                  />
                </div>
                <div>BTC</div>
              </div>
            </Table.Cell>
            <Table.Cell>Rp.1</Table.Cell>
            <Table.Cell>1%</Table.Cell>
            <Table.Cell>1%</Table.Cell>
            <Table.Cell>1%</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default MarketTable
