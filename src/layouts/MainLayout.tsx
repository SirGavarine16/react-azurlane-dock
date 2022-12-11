import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { FooterBar, NavigationBar } from '../components';

interface Props {
}

const MainLayout: FC<Props> = () => {
    return (
        <>
            <NavigationBar />
            <Box paddingX='2rem' paddingY='1.5rem' marginTop='3rem'>
                <Outlet />
                <Divider />
            </Box>
            <FooterBar />
        </>
    );
}

export default MainLayout;