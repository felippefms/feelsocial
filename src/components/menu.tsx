import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <nav>
                <Link to='/'>
                    <a>Página Inicial</a>
                </Link>

                <Link to='/Profile'>
                    <a>Página 2</a>
                </Link>

                <Link to='/Messages'>
                    <a>Página 3</a>
                </Link>

                <Link to='/Friends'>
                    <a>Página 4</a>
                </Link>
            </nav>
        </div>
    );
}

export default Menu;