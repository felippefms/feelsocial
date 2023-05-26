import Image from "next/image"
import profiledefaultpic from "../media/imgs/profilephotodefault.png";

function ProfilePhoto(){
    return(
        <div className="w-[40px] h-[40px] rounded-full">
            <Image src={profiledefaultpic} alt="Foto do Perfil"></Image>
        </div>
    )
}

export default ProfilePhoto;