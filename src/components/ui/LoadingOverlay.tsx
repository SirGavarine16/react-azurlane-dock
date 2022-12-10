import { FC, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { UIContext } from '../../contexts';

interface Props {
}

const LoadingOverlay: FC<Props> = () => {
    const { loading } = useContext(UIContext);

    return (
        <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color="inherit" size='3.5rem' />
        </Backdrop>
    );
}

export default LoadingOverlay;
