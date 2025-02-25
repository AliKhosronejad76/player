"use client";
import { useRef , useContext , createContext , useState , useEffect} from "react";
import { playList } from "@/data";


const PlayerContext = createContext();


export default function PlayerContextProvider({children}){
   const [drawer , setDrawer] = useState(false);
   const [songs , setSongs] = useState(playList);
   const [currentSong , setCurrentSong] = useState(songs[0]);
   const [isPlay , setIsPlay] = useState(false);
   const [start , setStart] = useState(false);

   useEffect(()=>{

   },[start]);
   
   
   const audioRef = useRef(null);

   
    return(
        <PlayerContext.Provider value={{
            drawer , 
            setDrawer,
            songs,
            setSongs,
            currentSong,
            setCurrentSong,
            audioRef,
            isPlay,
            setIsPlay,
            start , 
            setStart,
        }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const  usePlayer = ()=> useContext(PlayerContext); 