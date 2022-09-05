import data from '../assets/products.json'

function CardComponent() {
    const products = data.products;

    return (
        <div className='container'>
            <div className='products'>
            {products.map((products)=>(
                <div className='products'>
                    <div class="card col-sm">
                    <img src={products.image} class="card-img-top" alt="Imagen del producto"/>
                    <div class="card-body"></div>
                        <h5 class="card-title">{products.product}</h5>
                        <p class="card-text">{products.description}</p>
                        <p class="card-text">${products.price}</p>
                    </div>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default CardComponent;