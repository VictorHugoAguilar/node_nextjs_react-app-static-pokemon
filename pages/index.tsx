import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interface';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = (props) => {

  console.log(props)

  const { pokemons } = props;

  return (
    <Layout title='Listado de Pokémons'>

      <Grid.Container gap={2} justify='flex-start'>

        {
          pokemons.map(({ id, name, img }) => (

            <Grid xs={6} sm={3} xl={1} key={id}>
              <Card>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img}
                    width="100%"
                    height={140} />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text># {id}</Text>
                  </Row>
                </Card.Footer>

              </Card>

            </Grid>
          ))


        }

      </Grid.Container>



    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150');

  console.log(data);

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
