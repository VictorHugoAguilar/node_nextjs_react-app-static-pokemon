import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import { Layout } from "../../components/layouts";

interface Props {
    // pokemon: any
    id: string;
    name: string;
}
const PokemonPage: NextPage<Props> = ({ id, name }) => {

    const router = useRouter();


    return (
        <Layout title='algin pokemon'>
            <h1>{id} - {name}</h1>
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

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            id: 1,
            name: 'buba'
        }
    }
}

export default PokemonPage;