import { Link, NavLink } from "react-router-dom";
import Brand from "../assets/images/Brand.jpg"
import CartWidget from "./CartWidget"
const NavBar = () =>{
    return(
        <div className="container-fluid">
            <div className="row fondoPrincipal p-3">
                <div className="col-md align-items-center">
                    <Link to={"/"}>
                        <img src={Brand} alt="Viure"/>
                    </Link>
                </div>
                <div className="col">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link t-color-principal active" aria-current="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link t-color-principal" to={"/category/Linea Mediterranea"}>Línea Mediterranea</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link t-color-principal" to={"/category/Linea Pacifico"}>Línea Pacifico</NavLink>
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