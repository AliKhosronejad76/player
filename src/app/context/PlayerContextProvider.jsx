"use client";
import {useRef , useContext , createContext , useState} from "react";



const PlayerContext = createContext();


export default function PlayerContextProvider({children}){
   const [drawer , setDrawer] = useState(false);

    return(
        <PlayerContext.Provider value={{
            drawer , 
            setDrawer,
        }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const  usePlayer = ()=> useContext(PlayerContext); 