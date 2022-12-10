import { Box, Skeleton, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
    title: string;
    value?: string;
}

const DataLine: FC<Props> = ({ title, value }) => {
    return(
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>{title}:</Typography>
            {
                value 
                    ? <Typography>{value}</Typography>
                    : <Skeleton variant='rectangular' width='45%' height='1rem' />
            }
        </Box>
    );
}

export default DataLine;