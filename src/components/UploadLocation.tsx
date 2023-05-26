'use client'
import Image from "next/image";

import uploadlocation from '../media/imgs/location.png';

function UploadLocation(){
    return(
        <label className="flex items-center cursor-pointer rounded hover:bg-[#bfc1c4]">
            <Image className="w-[32px] h-full" src={uploadlocation} alt="Upload Video"></Image>
            <p>Local</p>
        </label>
    )
} 

export default UploadLocation;