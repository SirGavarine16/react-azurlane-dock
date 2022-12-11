import { FC } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

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