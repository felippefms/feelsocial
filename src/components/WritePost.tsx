'use client'

import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { SendPost } from "../../redux/slices/CreatePostSlice";

import ProfilePhoto from "./ProfilePhoto";
import UploadPhoto from "./UploadPhoto";
import UploadVideo from "./UploadVideo";
import UploadFeeling from "./UploadFeeling";
import UploadLocation from "./UploadLocation";

const CreatePost = () => {

    const [toggle,setToggle] = useState(true)
    const [content, setcontent] = useState('')

    const dispatch = useAppDispatch();

    const handleClick = () => {
        setToggle(!toggle)
    }

    const PublishPost = (content:any) => {
        dispatch(SendPost({ content }));
        setcontent('');
        setToggle(!toggle);
    }

    return(
        <div className="flex flex-col">
            {toggle ?
            <div className="flex flex-row items-center space-x-2 p-3 mt-6 mx-4 mb-2 rounded-full bg-[#FFFFFF]">
                <ProfilePhoto></ProfilePhoto>
                <span placeholder="teste" onClick={handleClick} className="w-full p-3 rounded-full cursor-pointer bg-[#F0F2F5] hover:bg-[#bfc1c4]">
                Criar uma publicação.
                </span>
            </div>
            :
            <div>
                <div className="flex flex-col m-4 rounded-lg bg-[#FFFFFF]">
                    <div className="flex items-center justify-end w-full">
                        <p className="text-center flex-1 text-2xl font-bold cursor-default">Criar Publicação</p>
                        <button className="py-2 px-4 rounded-full bg-[#F0F2F5] hover:bg-[#bfc1c4]" onClick={handleClick}>X</button>
                    </div>
                    <hr className="w-full h-px bg-gray-700 my-4"/>
                    <textarea className="h-80 text-start resize-none" placeholder="Escreva sua postagem" value={content} onChange={(e) => setcontent(e.target.value)}></textarea>
                    
                    <div className="flex w-full h-full items-center justify-center space-x-2 border rounded-lg">
                        <UploadPhoto></UploadPhoto>
                        <UploadVideo></UploadVideo>
                        <UploadFeeling></UploadFeeling>
                        <UploadLocation></UploadLocation>
                    </div>
                    <button onClick={() => PublishPost({ content })} className="w-full mt-3 py-2 rounded-lg bg-[#E4E6EB]">Publicar</button>
                </div>
            </div>
            }
        </div>
    )
}

export default CreatePost;