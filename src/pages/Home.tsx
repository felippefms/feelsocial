import React from 'react';
import { HomeWrapper } from '../styles/Home';
import Menu from '../components/Menu';

function Home(){
    return(
        <HomeWrapper>
            <h1>Pagina Inicial</h1>
            <Menu></Menu>
        </HomeWrapper>
    );
}

export default Home;