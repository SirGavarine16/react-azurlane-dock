import { FC } from 'react';
import Grid from '@mui/material/Grid';

import { HullTypeSelect, NationalitySelect, RaritySelect, SearchBar } from './';

interface FiltersFormData {
    nationality: string;
    rarity: string;
    hullType: string;
    search: string;
}

interface Props {
    formData: FiltersFormData;
    setFormField: (name: string, value: any) => void;
}

const FiltersForm: FC<Props> = ({ formData, setFormField }) => {
    const { nationality, rarity, hullType, search } = formData;

    return (
        <Grid container marginY='1rem' spacing='0.5rem' justifyContent='space-between'>
            <Grid item xs={12} md={8} lg={6}>
                <Grid container spacing='0.5rem'>
                    <Grid item xs={6} md={4}>
                        <NationalitySelect nationality={nationality} onChange={(n) => setFormField('nationality', n)} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <RaritySelect rarity={rarity} onChange={(r) => setFormField('rarity', r)} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <HullTypeSelect hullType={hullType} onChange={(h) => setFormField('hullType', h)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing='0.5rem'>
                    <Grid item xs={12}>
                        <SearchBar searchString={search} onSearchPress={(s) => setFormField('search', s)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FiltersForm;