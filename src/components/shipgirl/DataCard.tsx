import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';


import DataLine from './DataLine';
import SkillList from './SkillList';
import ObtainedFromData from './ObtainedFromData';
import { ShipgirlPageData } from '../../constants';

interface Props {
    data?: ShipgirlPageData;
}

const DataCard: FC<Props> = ({ data }) => {
    return (
        <Box component={Card} sx={{ width: '100%', minHeight: '100%' }}>
            <CardContent>
                <Box marginY='0.5rem'>
                    {
                        data
                            ? <Typography variant='h4' component='h1'>
                                {data.names.code}
                            </Typography>
                            : <Skeleton variant='rectangular' width='100%' height='2rem' />
                    }
                </Box>
                <Divider />
                <Box marginY='0.5rem'>
                    <DataLine title='Rarity' value={data ? data.rarity : undefined} />
                    <DataLine title='Hull Type' value={data ? data.hullType : undefined} />
                    <DataLine title='Faction' value={data ? data.nationality : undefined} />
                    <DataLine title='Class' value={data ? data.class : undefined} />
                    <DataLine title='VA' value={data ? data.misc.voice?.name || 'NA' : undefined} />
                </Box>
                <Divider />
                <Typography variant='h5' component='p' marginY='0.5rem'>
                    Skills
                </Typography>
                <Divider />
                <Box className='custom-scrollbar' sx={{ maxHeight: { lg: '28rem' }, overflowY: 'auto' }} marginY='0.5rem'>
                    <SkillList skills={data ? data.skills : undefined} />
                </Box>
                <Divider />
                <Typography variant='h5' component='p' marginY='0.5rem'>
                    How to obtain
                </Typography>
                <Divider />
                <ObtainedFromData data={data ?? undefined} />
            </CardContent>
        </Box>
    );
}

export default DataCard;