import { FC } from "react";

import { UIProvider } from "./UI";

interface AppProviderProps {
    children: JSX.Element;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    )
} 

export default AppProvider;