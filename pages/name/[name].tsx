import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interface";
import { localFavorites } from "../../utils";
import confetti from 'canvas-confetti';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id));

    const toogleFavorite = () => {
        localFavorites.toogleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite);

        if (isInFavorite) {
            return;
        }

        confetti({
            zIndex: 999,
            particleCount: 200,
            spread: 160,
            gravity: 1,
            angle: -90,
            origin: {
                x: 1,
                y: 0
            }
        })

    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize' >{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={!isInFavorite}
                                onClick={toogleFavorite}
                            >{isInFavorite ? 'En Favorito' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites: </Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemon151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}/`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;
