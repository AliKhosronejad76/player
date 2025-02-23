export default function MusicItem(){
    return(
        <div className="flex w-full gap-3 items-center py-1">
            <div className="w-[23%] ">
                <img 
                    src="/nodejs-1.jfif"
                    alt=""
                    className="h-[4.2rem] shadow-xl rounded-xl object-fill"
                />
            </div>
            <div className="w-[70%] flex flex-col gap-2 py-2 text-zic-800">
                    <h3 className="text-base">MusicName</h3>
                    <h4 className="text-sm">ArtistName</h4>
            </div>
        </div>
    );
}