import styled from 'styled-components';

export const Menuwrapper = styled.div`
    height: 100vh;
    display: flex;
    max-width: 300px;
    background-color: #08030f;
    flex-direction: column;

    nav{
        display: flex;
        flex-direction: column;
    }

    Link{
        flex-direction: column;

    }

    a{
        color:#fff;
    }

    a:hover{
        background-color: #5d43a5;
    }
`