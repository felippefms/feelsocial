import React from 'react';
import { HomeWrapper,Titlef } from '../styles/Home';
import Menu from '../components/Menu';

function Home(){
    return(
        <HomeWrapper>
            <Titlef>Pagina Inicial</Titlef>
            <Menu></Menu>
        </HomeWrapper>
    );
}

export default Home;