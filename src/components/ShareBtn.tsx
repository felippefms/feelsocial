'Use Client'

import Image from 'next/image';

import shareimg from '../media/imgs/sharelogo.png';

function ShareBtn(){
    return(
        <span className='flex items-center cursor-pointer'>
            <Image src={shareimg} alt='Compoartilhar' className='w-[32px] h-full'></Image>
            <p>Compartilhar</p>
        </span>
    )
} 

export default ShareBtn;