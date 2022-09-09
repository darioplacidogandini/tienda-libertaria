import CardComponent from '../component/card.component'
import data from '../assets/products.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductsContainer = () => {
    const products = data.products;
    return (
        <Container fluid>
            <Row xs={1} md={2} lg={4}>
            {products.map((products,index)=>(
                <Col key={index}>
                    <CardComponent products={products}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default ProductsContainer;