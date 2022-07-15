import { FC } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

interface Props  {
    title?: string;
    children: React.ReactNode; 
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="victor hugo aguilar aguilar"></meta>
                <meta name="description" content={`${title}`}></meta>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
            </Head>

            <Navbar />

            <main>
                {children}
            </main>
        </>
    );
};