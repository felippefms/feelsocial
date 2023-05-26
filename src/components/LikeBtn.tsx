'Use Client'

import Image from 'next/image';

import likeimg from '../media/imgs/likelogo.png';

function LikeBtn(){
    return(
        <span className='flex items-center cursor-pointer'>
            <Image src={likeimg} alt='Like' className='w-[32px] h-full'></Image>
            <p>Curtir</p>
        </span>
    )
} 

export default LikeBtn;