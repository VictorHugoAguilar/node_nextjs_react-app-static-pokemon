import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interface/pokemon-list";


interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({ pokemon: { id, img, name } }) => {

    return (
        <Grid xs={6} sm={3} xl={1} key={id}>
            <Card>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img!}
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
    )
};