import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
}

const EmptyContent: FC<Props> = () => {
    return(
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
            <picture style={{ width: '10rem' }}>
                <source srcSet='/essex_chibi.webp' type='image/webp' />
                <img src='/essex_chibi.png' alt='Azur Lane Logo' />
            </picture>
            <Typography variant='h4' textAlign='center' component='p'>
                No Shipgirls Available.
            </Typography>
        </Grid>
    );
}

export default EmptyContent;