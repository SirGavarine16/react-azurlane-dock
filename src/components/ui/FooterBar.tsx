import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
}

const FooterBar: FC<Props> = () => {
    return (
        <Box display='flex' justifyContent='center' paddingX='2rem' paddingBottom='2rem'>
            <Typography align='center'>
                Developed by{' '}
                <a
                    href='https://danieldelagavarain-dev.vercel.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'underline' }}
                >
                    Daniel De la Cruz
                </a>
                {' '}using{' '}
                <a
                    href='https://github.com/AzurAPI/azurapi-js#readme'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'underline' }}
                >
                    @azurapi/azurapi
                </a>
                .
            </Typography>
        </Box>
    );
}

export default FooterBar;