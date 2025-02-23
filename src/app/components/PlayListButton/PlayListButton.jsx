"use client";
import { usePlayer } from "@/app/context/PlayerContextProvider";
import { CgPlayList } from "react-icons/cg";



export default function PlayListButton(){
    const {setDrawer} = usePlayer();
    return(

        <div onClick={()=>setDrawer(true)} className="px-4 pt-2 text-5xl text-zinc-700 cursor-pointer t lg:hidden">
            <CgPlayList/>
        </div>

    );

}