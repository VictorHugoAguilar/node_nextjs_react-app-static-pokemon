import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interface';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = (props) => {
  const { pokemons } = props;
  return (
    <Layout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => {
            return (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            );
          })
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150');
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  }));
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
