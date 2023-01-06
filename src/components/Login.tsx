import { LoginWrapper } from '../styles/Login';
import { Link } from "react-router-dom";
import Logo from '../imgs/feelsociallogo.png';

function Login(){
    return(
        <LoginWrapper>
            <img src={Logo}></img>
            <h2>Inscreva-se, conecte-se  e nos ajude a aumentar cada vez mais essa incrível rede social !</h2>
            <input type="text" placeholder='Usuário'></input>
            <input type="password" placeholder='Senha'></input>
            <p>Não possui conta? Cadastre-se</p>
            <Link to='/Profile'><button>Entrar</button></Link>
        </LoginWrapper>
    );
}

export default Login;