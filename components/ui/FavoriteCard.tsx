import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemonId: number
}

export const FavoriteCard: FC<Props> = ({ pokemonId }) => {

    const route = useRouter();

    const toPokemonDescription = () => {
        route.push(`/pokemon/${pokemonId}`);
    }

    return (<Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} >
        <Card isHoverable isPressable
            onClick={toPokemonDescription}
        >
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                width={'100%'}
                height={140}
                alt={`pokemon id: ${pokemonId}`}
            />
        </Card>
    </Grid>);
}
