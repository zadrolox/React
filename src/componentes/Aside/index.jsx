import './style.css'
import Atlas from '../../assets/atlas.png'

function Aside(){
    return (
        <aside className="left">
            {/* Imagem */}
            <img src={Atlas} alt="" width="160px" />
                {/* Menu de Listas */}
            <ul>
                <li>
                    <a href="#inicio" className="active">Inicio</a>
                </li>
                <li>
                    <a href="#carreira">Carreira</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
            </ul>
        </aside>
    )
}

export default Aside