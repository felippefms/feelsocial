import React from 'react';
import { HomeWrapper } from '../styles/Home';

import Login from '../components/Login';


function Home(){
    return(
        <HomeWrapper>
            <Login></Login>       
        </HomeWrapper>
    );
}

export default Home;