function CardComponent({products}) {
    return (
        <div className='container'>
            <div class="card col-sm x-2 py-2">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={products.image1} alt="Imagen del producto 1"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={products.image2} alt="Imagen del producto 2"/>
                    </div>
                </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Siguiente</span>
            </a>
            </div>
                <div class="card-body"></div>
                    <h5 class="card-title text-primary">{products.product}</h5>
                    <p class="card-text">{products.description}</p>
                    <p class="card-text text-secondary">${products.price}</p>
                </div>
            </div>
    );
}

export default CardComponent;