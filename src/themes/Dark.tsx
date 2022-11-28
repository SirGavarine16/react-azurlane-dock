import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#f5f6fa',
        },
        info: {
            main: '#f5f6fa',
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#010101',
                },
            },
        },
    },
});

export default DarkTheme;