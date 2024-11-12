import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import {Genre} from '../hooks/useGenres';
import useGameQueryStore from '../store';


const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore( s => s.setGenreId);
    
    if(error) return null;
    if(isLoading) return <Spinner/>;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3} colorScheme="gray.500">Genres</Heading>
            <List>
                {data?.results.map(genre => 
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} 
                                boxSize="32px" 
                                borderRadius={8}
                                objectFit="cover"
                            />
                            <Button whiteSpace={'normal'} textAlign="left" 
                                fontWeight={genre.id === selectedGenreId  ? 'bold' : 'normal'} 
                                onClick={() => setSelectedGenreId(genre.id)} fontSize="lg" variant="link">
                                    {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default GenreList
