import React from 'react'
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';
interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenshots(gameId);
    const sreenshots = data?.results;

    if (isLoading) return null;
    if(error) throw error;

    return (
        <SimpleGrid 
            columns={{base:1, md:2}} 
            spacing={2}
            marginTop={1}
        >
            {sreenshots?.map(file => 
                <Image 
                    key={file.id}
                    alt="screenshot"
                    src={file.image} 
                />
            )}
        </SimpleGrid>
        
    )
}

export default GameScreenshots
