import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interface";

interface Props {
    pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const router = useRouter();


    return (
        <Layout title='algin pokemon'>
            <div>temporal</div>
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