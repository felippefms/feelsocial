'use client'
import Image from "next/image";

import uploadimage from '../media/imgs/uploadimg.png';

function UploadPhoto(){
    return(
        <label className="flex items-center cursor-pointer rounded hover:bg-[#bfc1c4]">
            <input type="file" accept="image/*" hidden></input>
            <Image className="w-[32px] h-full" src={uploadimage} alt="Upload Image"></Image>
            <p>Foto</p>
        </label>
    )
} 

export default UploadPhoto;