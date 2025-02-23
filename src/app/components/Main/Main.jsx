import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi"

export default function Main(){
    return(
       <div className="w-full  p-10 h-max flex items-start justify-center text-gary-300">
          
            <div className="flex flex-col ">
                    <div className="w-[18rem] h-[14rem]">
                        <Image 
                            src="/nodejs-1.jfif"
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-full rounded-xl shadow-xl"
                        />
                    </div>
                    <div className="w-full  items-center flex  flex-col gap-1 pb-7 pt-6">
                        <h1 className="font-bold text-2xl">MusicName</h1>
                        <h2 className="font-medium text-sm text-zinc-800">ArtistName</h2>
                        <h2 className="font-medium text-sm text-zinc-800">MusicName</h2>
                    </div>

                    <div>
                        {/* time sider */}
                    </div>
                    {/* actions */}
                    <div className=" actions flex justify-between px-6">
                            <div className="bg-zinc-300 w-10 h-10 flex items-center justify-center rounded-full">
                                <FaFastBackward className="text-zinc-800"/>
                            </div>
                            <div className="bg-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
                                <FaPlay/>
                            </div>
                            <div className="bg-zinc-300  w-10 h-10 flex items-center justify-center rounded-full">
                                <FaFastForward className="text-zinc-800"/>
                            </div>
                    </div>
                    {/* actions */}

                <div className="mt-8 w-full flex gap-2">
                   <GiSpeaker className="text-4xl text-zinc-800"/>
                    <input 
                        type="range"
                        className=" w-[90%] bg-pink-500"
                    />
                </div>

            </div>
             

       </div>
    );
}