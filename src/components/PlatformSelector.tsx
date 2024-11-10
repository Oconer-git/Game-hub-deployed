import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props{
    onSelectPlatform: (platformId: number) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data, error} = usePlatforms();
    if(error) return null;
   
    const platform = usePlatform(selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => 
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform.id)}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
