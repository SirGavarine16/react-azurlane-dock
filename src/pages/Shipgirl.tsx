import { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import { UIContext } from '../contexts';
import { getShipgirl } from '../controllers';
import { ShipgirlPageData } from '../constants';
import { DataCard, FavoriteButton, LoadingOverlay, SkinsCard } from '../components';

interface Props {
}

const Shipgirl: FC<Props> = () => {
    const { name = '' } = useParams();
    const [shipgirlData, setShipgirlData] = useState<ShipgirlPageData | undefined>(undefined);
    const [favorite, setFavorite] = useState(true);

    const { startLoading, finishLoading } = useContext(UIContext);

    useEffect(() => {
        const getShipgirlData = async () => {
            startLoading();
            const data = await getShipgirl(name);
            setShipgirlData(data.shipgirl);
            finishLoading();
        }

        getShipgirlData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFavoriteClick = () => {

    }

    return (
        <Box paddingBottom='1rem'>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={3}>
                    <DataCard data={shipgirlData} />
                </Grid>
                <Grid item xs={12} lg={9}>
                    <SkinsCard skins={shipgirlData ? shipgirlData.skins : undefined} />
                </Grid>
            </Grid>
            <FavoriteButton favorite={favorite} onClick={handleFavoriteClick} />
            <LoadingOverlay />
        </Box>
    );
}

export default Shipgirl;