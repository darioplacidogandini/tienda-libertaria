function CardComponent({products}) {
    return (
        <div className='container'>
            <div class="card col-sm x-2 py-2">
                <img src={products.image} class="card-img-top" alt="Imagen del producto"/>
                <div class="card-body"></div>
                    <h5 class="card-title">{products.product}</h5>
                    <p class="card-text">{products.description}</p>
                    <p class="card-text">${products.price}</p>
                </div>
            </div>
    );
}

export default CardComponent;