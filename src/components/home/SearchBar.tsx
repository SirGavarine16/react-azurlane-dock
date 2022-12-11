import { ChangeEvent, FC, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
    searchString: string;
    onSearchPress?: (searchString: string) => void;
}

const SearchBar: FC<Props> = ({ searchString, onSearchPress }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch(searchString);
    }, [searchString])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearch(value);
    }

    const handleSearch = () => {
        if (onSearchPress)
            onSearchPress(search);
    }

    return (
        <TextField
            variant='outlined'
            name='color'
            size='small'
            label='Search Shipgirl'
            placeholder='Shipgirl Name...'
            value={search}
            onChange={handleInputChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton size='small' onClick={handleSearch}>
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton size='small' onClick={() => onSearchPress ? onSearchPress('') : undefined}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            onKeyDown={(e) => e.key === 'Enter' ? handleSearch() : undefined}
            autoComplete='off'
            fullWidth
        />
    );
}

export default SearchBar;