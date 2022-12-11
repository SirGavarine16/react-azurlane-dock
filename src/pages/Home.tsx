import { FC } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import { EmptyContent, FiltersForm, LoadingOverlay, ScrollTop, ShipgirlCard } from '../components';
import { useHomeLogic } from '../hooks';

interface Props {
}

const Home: FC<Props> = () => {
    const { formData, setFormField, displayedShipgirls, totalPages, selectedPage, onPaginationChange } = useHomeLogic();

    return (
        <Box>
            <FiltersForm formData={formData} setFormField={setFormField} />
            <Divider />
            <Box>
                <Grid container spacing={2} paddingY='1rem'>
                    {
                        displayedShipgirls.length === 0 ?
                            <EmptyContent />
                            :
                            displayedShipgirls.map((ship) => (
                                <ShipgirlCard key={ship.id} data={ship} />
                            ))
                    }
                </Grid>
                <Box display='flex' justifyContent='center' marginY='1rem'>
                    <Pagination
                        count={totalPages}
                        page={selectedPage}
                        onChange={onPaginationChange}
                        size='small'
                    />
                </Box>
            </Box>
            <LoadingOverlay />
            <ScrollTop />
        </Box>
    );
}

export default Home;    