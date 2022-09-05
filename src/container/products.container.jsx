import CardComponent from '../component/card.component';
import data from '../assets/products.json'

const ProductsContainer = () => {
    const products = data.products;
    return (
        <div className='container'>
            <div class="row">
            {products.map((products,id)=>(
                <div key={id} className="col-4">
                    <CardComponent products={products}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProductsContainer;