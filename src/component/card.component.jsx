import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function CardComponent({products}) {
    return (
        <Card class>
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
            <Card.Title className="text-primary"><h3>{products.product}</h3></Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text>{products.measures}</Card.Text>
            <Card.Text className="text-secondary"><h1>${products.price}</h1></Card.Text>
        </Card>
    );
}

export default CardComponent;