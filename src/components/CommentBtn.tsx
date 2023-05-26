'Use Client'

import Image from 'next/image';

import commentimg from '../media/imgs/commentlogo.png';

function CommentBtn(){
    return(
        <span className='flex items-center cursor-pointer'>
            <Image src={commentimg} alt='Comment' className='w-[32px] h-full'></Image>
            <p>Comentar</p>
        </span>
    )
} 

export default CommentBtn;