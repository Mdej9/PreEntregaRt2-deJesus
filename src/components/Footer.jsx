const Footer =() =>{
    return(
        <div className="container-fluid fondoPrincipal">
            <div className="row">
                <div className="col">
                    <h2 className="coloFooter2 p-4 fs-5">INFORMACIÓN</h2>
                    <ul className="colorFooter">
                        <li className="li pb-3">Preguntas frecuentes</li>
                        <li className="li pb-3">Política de privacidad</li>
                        <li className="li pb-3">Términos y Condiciones</li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className="coloFooter2 p-4 fs-5">ATENCIÓN AL CLIENTE 24/7</h2>
                    <p className="colorFooter fontPrincipal">Realmente creemos en la mejor atención al cliente, por eso haremos lo que sea necesario para asegurarnos de que tengas una experiencia de compra increíble.<br/> <br />
                    Respondemos dentro de las primeras 24 horas a los correos electrónicos y nos aseguraremos de que todas tus inquietudes sean respondidas lo antes posible. Si tenés alguna duda, podés escribirnos a nuestros chats de atención al cliente en vivo a través de nuestras redes sociales:</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;