import Brand from "../assets/images/Brand.jpg"
import CartWidget from "./CartWidget"
const NavBar = () =>{
    return(
        <div className="container-fluid">
            <div className="row fondoPrincipal p-3">
                <div className="col-md align-items-center">
                    <a href="#">
                        <img src={Brand} alt="Viure"/>
                    </a>
                </div>
                <div className="col">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link t-color-principal active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link t-color-principal" href="#">Línea Mediterranea</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link t-color-principal" href="#">Línea Pacifico</a>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    < CartWidget /> 
                </div>
            </div>
        </div>
    )
}
export default NavBar;