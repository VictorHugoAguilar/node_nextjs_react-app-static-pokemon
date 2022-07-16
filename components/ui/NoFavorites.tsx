import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
    return (<Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        <Text h1>No hay Favoritos</Text>
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            width={500}
            height={500}
            css={{ opacity: 0.2 }}
        />
    </Container>);

}