import React from "react";
import { Card, Carousel, Row } from "react-bootstrap";
import '../../styles/CardCarousel.scss';

const CardCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2500}>
        <div className="review-item-wrap">

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/man-1.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/woman-1.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/man-2.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </Carousel.Item>

      

      <Carousel.Item interval={2500}>
        <div className="review-item-wrap">

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/woman-2.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/man-3.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/woman-3.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CardCarousel;