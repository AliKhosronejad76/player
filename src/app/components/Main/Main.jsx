"use client";
import { useState } from "react";
import { usePlayer } from "@/app/context/PlayerContextProvider";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi"
import { BsFillPauseFill } from "react-icons/bs";


export default function Main(){
    const { 
        currentSong , 
        setCurrentSong , 
        audioRef , 
        isPlay , 
        setIsPlay , 
        songs , 
        
    } = usePlayer();

    const [info , setInfo] = useState({
        currentTime:0,
        duration:0,
    });

    const playSong = ()=>{
     if(isPlay){
        audioRef.current.pause();
        setIsPlay(false);
     }else{
       audioRef.current.play();
       setIsPlay(true);
     }
    }

    const timeConvert =  (time)=>{ 
        const r =  Math.floor( time / 60 ) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
        return  r     
    }

    const timeHandler = (e)=>{
       
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setInfo({...info , currentTime , duration});
    }

    
      
        // timeHandler();
  
    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setInfo({...info , currentTime:e.target.value})
    
    }

    const skip = (dir)=>{
        const currentIndex = songs.findIndex(song=> song.id === currentSong.id);
        console.log(currentIndex);
        if(dir === "forward"){
            if(currentIndex=== songs.length-1){
                setCurrentSong(songs[0]);
            }else{
                 setCurrentSong(songs[currentIndex + 1 ]);
            }
        
        }


        if(dir === "back"){
            if(currentIndex === 0){
                setCurrentSong(songs[songs.length-1]);
            }else{
                 setCurrentSong(songs[currentIndex - 1 ]);
            }
        
        }

        
    }


    return(
       <div className="w-full  relative p-10 h-max flex items-start justify-center text-gary-300">
            <div 
            style={{
                background:`url(${currentSong.cover})`,
                // backgroundAttachment:'fixed ',
                backgroundPosition:'center center',
                backgroundSize:"cover",
            }}
       className="absolute app h-screen top-0 bottom-0 z-[-1] right-0 left-0 bg-center bg-cover">

       </div>
         
            <div className="relative flex flex-col z-[120]">
                    <div className="w-[18rem] h-[14rem]">
                        <Image 
                            src={currentSong.cover}
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-full rounded-xl shadow-xl"
                        />
                    </div>
                        <div className="h-8 flex gap-3 mt-5 justify-between items-cener">
                            <div className="h-full flex items-center text-white text-sm">
                                {timeConvert(info.duration)}
                            </div>
                            <input
                            value={info.currentTime}
                            max={info.duration} 
                            min={0}
                            type="range" 
                            className="inputRange"
                            onChange={dragHandler}
                            />
                            <div className="h-full flex items-center text-white text-sm">
                                {timeConvert(info.currentTime)}
                            </div>
                        </div>
                    <div className="w-full  items-center flex  flex-col gap-1 pb-7 pt-6">
                        <h1 className="font-bold text-2xl text-gray-200">{currentSong.enName}</h1>
                        <h2 className="font-medium text-sm text-gray-200">{currentSong.EnArtist}</h2>
                        <h2 className="font-medium text-sm text-gray-200">{currentSong.EnName}</h2>
                    </div>

                    <div>
                        {/* time sider */}
                    </div>
                    {/* actions */}
                    <div className=" actions flex justify-between px-6">
                            <div onClick={()=>skip("back")}  className="bg-zinc-300 w-10 h-10 flex items-center justify-center rounded-full">
                                <FaFastBackward className="text-zinc-800"/>
                            </div>
                            <div onClick={playSong} className="bg-pink-500 text-white text-2xl w-12 h-12 flex items-center justify-center cursor-pointer rounded-full">
                               {
                                isPlay ? <BsFillPauseFill/> : <FaPlay/>
                               } 
                            </div>
                            <div onClick={()=>skip("forward")} className="bg-zinc-300  w-10 h-10 flex items-center justify-center rounded-full">
                                <FaFastForward className="text-zinc-800"/>
                            </div>
                    </div>
                    {/* actions */}

                 <div className="mt-8 w-full flex gap-2">
                   <GiSpeaker className="text-4xl text-zinc-300"/>
                    
                 </div> 

            </div>
         
                      
            <audio
                onLoadedMetadata={timeHandler} 
                onTimeUpdate={timeHandler}
                ref={audioRef} 
                src={currentSong.src}
              >

            </audio>
       </div>
    );
}