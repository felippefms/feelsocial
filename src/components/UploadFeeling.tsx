'use client'
import Image from "next/image";

import uploadfeeling from '../media/imgs/feeling.png';

function UploadFeeling(){
    return(
        <label className="flex h-full items-center cursor-pointer rounded hover:bg-[#bfc1c4]">
            <Image src={uploadfeeling} alt="Upload Video"></Image>
            <p>Emoção</p>
        </label>
    )
} 

export default UploadFeeling;