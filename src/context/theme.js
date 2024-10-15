import { createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}//isko banake ab hum logo ko usecontext har jagah import karne kio zarrorate nahui hai