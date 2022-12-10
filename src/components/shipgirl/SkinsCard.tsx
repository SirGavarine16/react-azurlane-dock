import { FC, useState } from 'react';
import { Box, Button, ButtonGroup, Card, Divider, Grid, Skeleton, Typography } from '@mui/material';

import { ShipgirlPageData } from '../../constants';

interface Props {
    skins?: ShipgirlPageData['skins'];
}

const SkinsCard: FC<Props> = ({ skins }) => {
    const [skinIndex, setSkinIndex] = useState(0);

    return (
        <Box component={Card} padding='1rem' sx={{ width: '100%', minHeight: '100%' }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h5' component='p' marginY='0.5rem'>
                        Skins
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Box width='100%' height='36.5rem' position='relative' marginY='0.5rem'>
                        {
                            skins
                                ? <img
                                    src={skins[skinIndex].bg ? skins[skinIndex].bg : skins[skinIndex].image}
                                    alt={skins[skinIndex].name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                                : <Skeleton
                                    variant='rounded'
                                    width='50%'
                                    height='100%'
                                    sx={{ margin: '0 auto' }}
                                />
                        }
                    </Box>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems='center'>
                        <Grid item xs={12} lg={10} sx={{ overflowX: { xs: 'scroll', lg: 'auto' } }} className='custom-scrollbar'>
                            <Box marginY='0.5rem'>
                                {
                                    skins
                                        ? <ButtonGroup color='info'>
                                            {
                                                skins.map((skin, _index) =>
                                                    <Button
                                                        key={`skin-${_index}`}
                                                        onClick={() => setSkinIndex(_index)}
                                                        variant={skinIndex === _index ? 'contained' : 'outlined'}
                                                    >
                                                        {skin.name}
                                                    </Button>
                                                )
                                            }
                                        </ButtonGroup>
                                        : <Skeleton variant='rectangular' width='100%' height='2rem' />
                                }
                            </Box>
                            {
                                skins
                                    ? <Typography marginY='0.5rem'>
                                        Obtained from {skins[skinIndex].info.obtainedFrom}.
                                    </Typography>
                                    : <Skeleton variant='rectangular' width='80%' height='1rem' />
                            }

                        </Grid>
                        <Grid item xs={12} lg={2}>
                            <Box sx={{ width: '100%', height: '9rem', position: 'relative' }} marginY='1rem'>
                                {
                                    skins
                                        ? <img
                                            src={skins[skinIndex].chibi}
                                            alt='Chibi version'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                        : <Skeleton variant='rectangular' width='50%' height='100%' sx={{ margin: '0 auto' }} />
                                }
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                </Grid>
            </Grid>
        </Box>
    );
}

export default SkinsCard;