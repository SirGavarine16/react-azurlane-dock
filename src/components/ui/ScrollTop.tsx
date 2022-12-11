import { FC } from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
}

const ScrollTop: FC<Props> = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 30
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Zoom in={trigger}>
            <Fab sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }} color='info' onClick={scrollToTop}>
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
}

export default ScrollTop;