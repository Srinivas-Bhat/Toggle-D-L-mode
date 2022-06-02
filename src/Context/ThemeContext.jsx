import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();



export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("light");

    const toggletheme = () => {
        if(theme === "light") { 
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value= {{
            theme,
            isLight : theme === "light",
            toggletheme,

        }}>{children}</ThemeContext.Provider>
    )
};

