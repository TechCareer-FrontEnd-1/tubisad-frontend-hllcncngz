import { createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(localStorage.getItem("mode"));

  let toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") {
      localStorage.setItem("mode", "ligth");
    } else {
      localStorage.setItem("mode", "dark");
    }
  };

  

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      let currentValue = localStorage.getItem("mode");
      if(currentValue !== theme){
        setTheme(currentValue);
      }
    } else {
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    }
  }, [theme]);
 

  let values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
