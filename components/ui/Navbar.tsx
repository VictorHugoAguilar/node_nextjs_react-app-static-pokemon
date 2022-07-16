import { useTheme, Text, Spacer, Image, Link } from "@nextui-org/react";
import { FC } from "react";
import NextLink from 'next/link';

export const Navbar: FC = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 50px',
            backgroundColor: theme?.colors.gray50.value
        }}>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
                alt='app icon'
                width={70}
                height={70}
            />
            <NextLink href='/' passHref>
                <Link>
                    <Text css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                        weight="bold" h2>P</Text>
                    <Text css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                        weight="bold" h4>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Link block color="secondary">
                    <Text  css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                    weight="bold"
                    h4 >Favoritos  </Text>
                </Link>
            </NextLink>
        </div>
    );
}