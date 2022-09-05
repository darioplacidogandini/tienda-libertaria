import CardComponent from '../component/card.component';

const ProductsContainer = () => {
    return (
        <div className='container'>
            <div class="row">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </div>
    )
}

export default ProductsContainer;