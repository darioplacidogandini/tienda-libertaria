function CardComponent({products}) {
    return (
        <div className='container'>
            <div className="card">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={products.image1} alt="Imagen del producto 1"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={products.image2} alt="Imagen del producto 2"/>
                    </div>
                </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
                <div className="card-body"></div>
                    <h5 className="card-title text-primary">{products.product}</h5>
                    <p className="card-text">{products.description}</p>
                    <p className="card-text text-secondary fs-1">${products.price}</p>
                </div>
            </div>
    );
}

export default CardComponent;