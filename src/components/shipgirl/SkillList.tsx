import { FC } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { ShipgirlPageData } from '../../constants';

interface Props {
    skills?: ShipgirlPageData['skills'];
}

const SkillList: FC<Props> = ({ skills }) => {
    return (
        <Box>
            {
                skills
                    ? skills.filter((s) => !s.names.en.includes('Fate Simulation') && !s.names.en.includes('Retrofit')).map((skill, index) => (
                        <Box key={skill.names.en} display='flex' alignItems='center'>
                            <Box width={{ xs: '15%', sm: '10%', md: '5%', lg: '20%', xl: '15%' }}>
                                <img
                                    src={skill.icon}
                                    alt={`${skill.names.en} - Icon`}
                                    style={{
                                        width: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Box>
                            <Box padding='1rem' width={{ xs: '85%', sm: '90%', md: '95%', lg: '80%', xl: '85%' }}>
                                <Typography variant='h6' component='p'>
                                    {skill.names.en}
                                </Typography>
                                <Typography width='100%' variant='body2' textAlign='justify'>
                                    {skill.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                    : <Box display='flex' alignItems='center' justifyContent='space-around'>
                        <Skeleton variant='rectangular' width='56px' height='56px' />
                        <Box width='70%'>
                            <Skeleton variant='rectangular' width='100%' height='1.5rem' sx={{ marginY: '0.5rem' }} />
                            <Skeleton variant='rectangular' width='100%' height='5rem' />
                        </Box>
                    </Box>
            }
        </Box>
    );
}

export default SkillList;