import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ShipgirlCardData } from '../../constants';

interface Props {
    data: ShipgirlCardData
}

const ShipgirlCard: FC<Props> = ({ data }) => {
    const { name, thumbnail, rarity } = data;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const bg = useMemo(() => {
        if (rarity === 'Ultra Rare' || rarity === 'Decisive') {
            return 'bg-rarity-ultra-rare';
        }
        switch (rarity as string) {
            case 'Normal':
                return 'bg-rarity-normal';
            case 'Rare':
                return 'bg-rarity-rare';
            case 'Elite':
                return 'bg-rarity-elite';
            default:
                return 'bg-rarity-super-rare';
        }
    }, [rarity]);

    const handleCardClick = () => {
        setLoading(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        navigate(`/shipgirl/${data.name}`);
    }

    return (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={3 / 2}>
            <Box
                component={Card}
                display='flex'
                flexDirection='column'
                alignItems='center'
                minHeight='100%'
                paddingTop={{ xs: 0, sm: '0.5rem' }}
                className='shipgirl-card-container'
                onClick={handleCardClick}
            >
                <img
                    src={thumbnail}
                    alt={`${name} Thumbnail`}
                    className={`shipgirl-card ${bg} shipgirl-card-img`}
                />
                <Box padding='0.5rem'>
                    {
                        loading ?
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <CircularProgress color='info' size={30} />
                            </Box>
                            :
                            <Typography variant='h6' align='center' component='p'>
                                {name}
                            </Typography>
                    }
                </Box>

            </Box>

        </Grid>
    );
}

export default ShipgirlCard;