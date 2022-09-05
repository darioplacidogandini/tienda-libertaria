import productImage from '../assets/producto.jpg'

const CardComponent = () => {
    return (
        <div class="card col-4">
        <img src={productImage} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">TITULO PRODUCTO</h5>
        <p class="card-text">Descripcion del producto</p>
        <p class="card-text">$1200</p>
        </div>
        </div>
    )
}

export default CardComponent;