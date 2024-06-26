import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.imagen}  className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col-md-5">
                    <h1>{item.nombre}</h1>
                    <p><b>${item.precio}</b></p>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;