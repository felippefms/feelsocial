import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 550px;
    height: 650px;
    background-color: #746d88;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    h1{
        color: white;
        margin-bottom: 90px;
    }

    h2{
        color: white;
        margin-bottom: 120px;
        text-align: center;
    }

    input{
        height: 40px;
        width: 80%;
    }

    button{
        margin-top: 80px;
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
