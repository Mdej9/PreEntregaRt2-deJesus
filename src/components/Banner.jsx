import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import banner4 from "../assets/images/banner4.jpg"
import banner5 from "../assets/images/banner5.jpg"
import banner6 from "../assets/images/banner6.jpg"
import banner7 from "../assets/images/banner7.jpg"
import banner8 from "../assets/images/banner8.jpg"
import banner9 from "../assets/images/banner9.jpg"

const Banner =( ) =>{
    return(
        <div className="container">
            <div className="row pb-4">
                <div className="col">
                    <a href="">
                        <img src={banner1} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner2} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner3} alt="" className="img-fluid" />
                    </a>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col">
                    <a href="">
                        <img src={banner4} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner5} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner6} alt="" className="img-fluid" />
                    </a>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col">
                    <a href="">
                        <img src={banner7} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner8} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src={banner9} alt="" className="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;