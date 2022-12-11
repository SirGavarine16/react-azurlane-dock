import { FC } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { useFavoriteShipgirlsLogic } from '../hooks';
import { EmptyContent, LoadingOverlay, ScrollTop, ShipgirlCard } from '../components';

interface Props {
}

const FavoriteShipgirls: FC<Props> = () => {
    const { displayedShipgirls, totalPages, selectedPage, onPaginationChange } = useFavoriteShipgirlsLogic();    

    return (
        <Box>
            <Typography variant='h4' component='h1' marginBottom='1rem'>
                Favorite Shipgirls
            </Typography>
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

export default FavoriteShipgirls;