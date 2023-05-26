'use client'
import Image from "next/image";

import uploadvideo from '../media/imgs/uploadvideo.png';

function UploadVideo(){
    return(
        <label className="flex items-center cursor-pointer rounded hover:bg-[#bfc1c4]">
            <input type="file" accept="video/*" hidden></input>
            <Image className="w-[32px] h-full" src={uploadvideo} alt="Upload Video"></Image>
            <p>Video</p>
        </label>
    )
} 

export default UploadVideo;