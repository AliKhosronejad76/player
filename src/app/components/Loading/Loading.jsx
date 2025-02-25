import {BeatLoader} from "react-spinners"

export default function Loading(){
    return(
        <div className="h-full w-full flex items-center justify-center">
                <h1 className="text-6xl text-center">
                    <BeatLoader color="pink"/>
                </h1>
        </div>
    );
}