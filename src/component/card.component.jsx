import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function CardComponent({products}) {
    return (
        <Card>
            <Carousel prevLabel="" nextLabel="" indicators={false} interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={products.image1}
                            alt="Foto 1 del producto"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={products.image2}
                            alt="Foto 2 del producto"
                            />
                    </Carousel.Item>
            </Carousel>
            <Card.Title className="text-primary fs-1">{products.product}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text>{products.measures}</Card.Text>
            <Card.Text className="text-secondary fs-1">${products.price}</Card.Text>
        </Card>
    );
}

export default CardComponent;