import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { nationalities } from '../../constants';

interface Props {
    nationality: string;
    onChange: (nationality: string) => void;
}

const NationalitySelect: FC<Props> = ({ nationality, onChange }) => {
    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        onChange(e.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel size='small'>Nationality</InputLabel>
            <Select label="Nationality" variant='outlined' size='small' value={nationality} onChange={handleSelectChange}>
                <MenuItem value='all'>All</MenuItem>
                {
                    nationalities.map((_nationality, index) => 
                        <MenuItem key={`nationality-${index}`} value={_nationality}>
                            {_nationality}
                        </MenuItem>
                    )
                }
                <MenuItem value='other'>Other</MenuItem>
            </Select>
        </FormControl>
    );
}

export default NationalitySelect;