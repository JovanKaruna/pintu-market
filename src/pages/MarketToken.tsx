import React from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const MarketToken: React.FC = () => {
  const param = useParams<{ token: string }>()
  return (
    <Layout>
      <div className="min-h-10vh flex items-center">
        <div className="text-2xl text-blue-dark darl:text-blue-light font-bold">
          Halaman detail untuk token {param.token?.toUpperCase()}
        </div>
      </div>
      <Button color="blue" floated="left" as={Link} to={'/market'}>
        <h3>Balik ke Market</h3>
      </Button>
    </Layout>
  )
}

export default MarketToken
