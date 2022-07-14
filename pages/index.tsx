import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokémons'>
      <h1>first page</h1>
      <Button color="gradient"> Bola</Button>
    </Layout>
  )
}

export default HomePage
