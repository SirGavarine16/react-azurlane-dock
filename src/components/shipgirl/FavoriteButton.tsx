import { FC } from 'react';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    onClick: () => void;
    favorite: boolean;
}

const favoriteButtonStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    color: 'white',
    backgroundColor: '#a33243',
    transition: 'all 0.2s ease-in',
    '&:hover': {
        backgroundColor: '#bb2b4b'
    }
}

const FavoriteButton: FC<Props> = ({ onClick, favorite }) => {
    return (
        <Fab onClick={onClick} sx={favoriteButtonStyle}>
            {
                favorite
                    ? <FavoriteIcon />
                    : <FavoriteBorderIcon />
            }
        </Fab>
    );
}

export default FavoriteButton;