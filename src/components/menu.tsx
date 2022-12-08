import { Link } from "react-router-dom";
import { Menuwrapper } from '../styles/Menu';

function Menu(){
    return(
        <Menuwrapper>
            <nav>
                <Link to='/'>
                    <a>Página Inicial</a>
                </Link>

                <Link to='/Profile'>
                    <a>Perfil</a>
                </Link>

                <Link to='/Messages'>
                    <a>Mensagens</a>
                </Link>

                <Link to='/Friends'>
                    <a>Amigos</a>
                </Link>
            </nav>
        </Menuwrapper>
    );
}

export default Menu;