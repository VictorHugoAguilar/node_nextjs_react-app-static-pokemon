import { Button } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse } from '../interface';

const HomePage: NextPage = (props) => {

  console.log(props)

  return (
    <Layout title='Listado de Pokémons'>



    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150');

  console.log(data);

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage
