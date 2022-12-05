import { LoginWrapper } from '../styles/Login';

function Login(){
    return(
        <LoginWrapper>
            <h1>Feelsocial</h1>
            <h2>Inscreva-se, conecte-se  e nos ajude a aumentar cada vez mais essa incrível rede social !</h2>
            <input placeholder='Usuário'></input>
            <input type="password" placeholder='Senha'></input>
            <button>Entrar</button>
        </LoginWrapper>
    );
}

export default Login;