import { Button } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
  return (
    <Layout title='Listado de Pokémons'>



    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      
    }
  }
}

export default HomePage
