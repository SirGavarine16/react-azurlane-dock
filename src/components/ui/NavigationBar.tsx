import { FC, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { UIContext } from '../../contexts';

interface Props {
}

const NavigationBar: FC<Props> = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(UIContext);

    const goToFavoriteShipgirlsPage = () => {
        navigate('/favorites');
    }

    return (
        <header>
            <AppBar position='fixed'>
                <Toolbar>
                    <Grid
                        container
                        justifyContent='space-between'
                        alignItems='center'
                        paddingY='0.5rem'
                        paddingX='1rem'
                    >
                        <Grid item>
                            <Link to='/'>
                                <Grid container alignItems='center'>
                                    <Grid item sx={{ width: '3rem' }}>
                                        <picture>
                                            <source srcSet='/azurlane_logo.webp' type='image/webp' />
                                            <img src='/azurlane_logo.png' alt='Azur Lane Logo' />
                                        </picture>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant='h4'
                                            color='secondary'
                                            sx={{
                                                marginLeft: '0.5rem',
                                                display: { xs: 'none', md: 'unset' }
                                            }}
                                            component='p'
                                        >
                                            Azur Lane Dock
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                        <Grid item>
                            <IconButton size='large' onClick={toggleTheme}>
                                {
                                    theme === 'light'
                                        ? <DarkModeIcon color='secondary' />
                                        : <LightModeIcon color='secondary' />
                                }
                            </IconButton>
                            <Tooltip title='Favorite Shipgirls'>
                                <IconButton size='large' onClick={goToFavoriteShipgirlsPage}>
                                    <FavoriteBorderIcon color='secondary' />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default NavigationBar;