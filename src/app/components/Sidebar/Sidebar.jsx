"use client";
import { useState } from "react";
import MusicItem from "../MusicItem/MusicItem";
import { CgPlayList } from "react-icons/cg";
import { usePlayer } from "@/app/context/PlayerContextProvider";
import { FaAngleRight } from "react-icons/fa";
import { playList } from "@/data";


export default function Sidebar(){
    const {drawer , setDrawer , songs} = usePlayer();
    return(
        <aside className={`sidebar ${ drawer ? "translate-x-[0px]":"translate-x-[1800px] lg:translate-x-0" } bg-[rgba(236,234,234,0.96)]   order-2 fixed overflow-scroll max-h-screen bottom-0 top-0 left-0 h-max w-full lg:w-[30%] transition duration-300 ease-in-out z-[300]`}>
             <div className="sticky top-0  border-b border-zinc-400 bg-white text-zinc-700 ">
                <div className="flex items-center px-4 justify-between">
                        <div className="flex flex-col gap-1 py-3">
                            <h4>
                                PlayList
                            </h4>
                            <span>
                                {songs.length} song
                            </span>
                        </div>
                        <FaAngleRight onClick={()=>setDrawer(false)} className="text-3xl text-zinc-600 cursor-pointer lg:hidden"/>
                        <CgPlayList className="text-4xl hidden lg:block"/>
                </div>
             </div>

             <div className=" left-0   w-full mt-8 flex flex-col gap-4 ">
                {
                   songs.map(data=><MusicItem data={data}/>)
                }
             </div>
         

        </aside>
    );
}