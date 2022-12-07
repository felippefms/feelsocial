import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 550px;
    height: 650px;
    background-color: #746d88;
    border: 2px solid black;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    img{
        width: 300px;
        height: 300px;
        border-radius: 30px;
        border: 4px solid black;
        margin-top: 5px;
    }

    h2{
        color: white;
        margin-bottom: 80px;
        text-align: center;
    }

    input{
        height: 40px;
        width: 80%;
        border: 1px solid black;
    }

    p{
        color: #0000EE;
        cursor: pointer;
    }

    p:hover{
        text-decoration: underline;
    }

    button{
        margin-top: 70px;
        margin-bottom: 5px;
        height: 40px;
        width: 130px;
        border: none;
        border-radius: 5px;
    }

    button:hover{
        background-color: #bab9bd;
        cursor: pointer;
    }
`
