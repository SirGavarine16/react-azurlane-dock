import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { rarities } from '../../constants';

interface Props {
    rarity: string;
    onChange: (rarity: string) => void;
}

const RaritySelect: FC<Props> = ({ rarity, onChange }) => {
    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        onChange(e.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel size='small'>Rarity</InputLabel>
            <Select label="Rarity" variant='outlined' size='small' value={rarity} onChange={handleSelectChange}>
                <MenuItem value='all'>All</MenuItem>
                {
                    rarities.map((_rarity, index) =>
                        <MenuItem key={`nationality-${index}`} value={_rarity}>
                            {_rarity}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
}

export default RaritySelect;