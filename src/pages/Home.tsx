import React from 'react';
import { HomeWrapper } from '../styles/Home';
import Menu from '../components/Menu';
import Login from '../components/Login';

function Home(){
    return(
        
        <HomeWrapper>
            <Menu></Menu>
            <Login></Login>
        </HomeWrapper>
    );
}

export default Home;