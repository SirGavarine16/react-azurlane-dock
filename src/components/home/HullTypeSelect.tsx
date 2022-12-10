import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { hullTypes } from '../../constants';

interface Props {
    hullType: string;
    onChange: (hullType: string) => void;
}

const HullTypeSelect: FC<Props> = ({ hullType, onChange }) => {
    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        onChange(e.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel size='small'>Hull Type</InputLabel>
            <Select label="Hull Type" variant='outlined' size='small' value={hullType} onChange={handleSelectChange}>
                <MenuItem value='all'>All</MenuItem>
                {
                    hullTypes.map((_hullType, index) =>
                        <MenuItem key={`nationality-${index}`} value={_hullType}>
                            {_hullType}
                        </MenuItem>
                    )
                }
                <MenuItem value='other'>Other</MenuItem>
            </Select>
        </FormControl>
    );
}

export default HullTypeSelect;