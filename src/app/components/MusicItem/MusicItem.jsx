import Image from "next/image";
import { usePlayer } from "@/app/context/PlayerContextProvider";
import { ScaleLoader } from "react-spinners";


export default function MusicItem({data}){
    const { 
        currentSong,
        setCurrentSong,
        setIsPlay,
        audioRef,
        isPlay,
        start, 
        } = usePlayer();
    
   async function handler(){
        await setCurrentSong(data);
        audioRef.current.play();
        setIsPlay(true);
    }
    let active = currentSong.id === data.id ? "bg-zinc-300":"bg-transparent"
    return(
        <div onClick={handler} className={`flex w-full  justify-start gap-3 items-center py-1 cursor-pointer px-4 ${active}`}>
            <div className="w-max ">
                <Image 
                    width={100}
                    height={100}
                    src={data.img}
                    alt="music"
                    className="h-[3.8rem] w-[4rem] shadow-xl rounded-xl object-fill"
                />
            </div>
            <div className="w-[70%] flex flex-col gap-2 py-2 text-zic-800">
                    <h3 className="text-base font-bold text-zinc-700">{data.enName}</h3>
                    <h4 className="text-sm text-zinc-600">{data.EnArtist}</h4>
            </div>
            {currentSong.id === data.id && isPlay ? <ScaleLoader color="#ec4899" width={4} height={14}/>:null}
        </div>
    );
}