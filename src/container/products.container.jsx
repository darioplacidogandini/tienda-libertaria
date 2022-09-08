import CardComponent from '../component/card.component'
import data from '../../public/products.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductsContainer = () => {
    const products = data.products;
    return (
        <Container fluid>
            <Row>
            {products.map((products)=>(
                <Col xs={12} sm={12} md={12} lg={6}>
                    <CardComponent products={products}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default ProductsContainer;