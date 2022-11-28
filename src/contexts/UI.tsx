import { createContext, FC, useEffect, useReducer } from "react";
import Cookies from 'js-cookie';

import { ThemeType } from "../constants";

interface UIContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

interface UIProviderProps {
    children: JSX.Element;
}

interface UIState {
    theme: ThemeType;
}

type UIReducerAction =
    | { type: '[UI] - setTheme', payload: ThemeType };


export const UIContext = createContext<UIContextProps>({} as UIContextProps);

const uiReducer = (state: UIState, action: UIReducerAction): UIState => {
    switch (action.type) {
        case '[UI] - setTheme':
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, {
        theme: 'light',
    });

    const toggleTheme = () => {
        const newThemeSelected =
            state.theme === 'dark'
                ? 'light'
                : 'dark';
        Cookies.set('theme', newThemeSelected);
        dispatch({
            type: '[UI] - setTheme',
            payload: newThemeSelected,
        });
    }

    useEffect(() => {
        const getThemeFromCookies = () => {
            const selectedTheme = Cookies.get('theme');
            if (selectedTheme === 'dark') {
                dispatch({
                    type: '[UI] - setTheme',
                    payload: selectedTheme,
                });
            }
        }

        getThemeFromCookies();
    }, [])


    return (
        <UIContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </UIContext.Provider>
    )
}