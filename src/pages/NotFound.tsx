import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Message, Button } from 'semantic-ui-react'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Message warning>
        <Message.Header>Halaman tidak ditemukan</Message.Header>
        <p>URL yang dituju mungkin salah atau kedaluwarsa.</p>
      </Message>
      <Button color="blue" floated="right" as={Link} to={'/market'}>
        <h3>Balik ke Market</h3>
      </Button>
    </Layout>
  )
}

export default NotFoundPage
