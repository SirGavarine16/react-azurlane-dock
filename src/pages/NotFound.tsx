import { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
}

const NotFound: FC<Props> = () => {
    return (
        <Box
            minHeight='50vh'
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingBottom='2.5rem'
        >
            <picture style={{ width: '10rem' }}>
                <source srcSet='/essex_chibi.webp' type='image/webp' />
                <img src='/essex_chibi.png' alt='Azur Lane Logo' />
            </picture>
            <Typography variant='h4' textAlign='center' component='h1'>
                Sorry Commander, the page you requested could not be found.
            </Typography>
            <Link to='/' style={{ textDecoration: 'underline' }}>
                Return to Port
            </Link>
        </Box>
    );
}

export default NotFound;