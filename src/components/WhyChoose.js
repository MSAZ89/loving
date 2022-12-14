import { Row, Card, Col } from "react-bootstrap"

var cardStyle = {
    height: '100%'
}

export default function WhyChoose(){
    return(
        <>
            <h2 className="text-uppercase text-center mt-60">Why Choose Loving Family Dental?</h2>
            <hr style={{ width: '25%' }} className="text-center"></hr>
            <Row className="text-center mt-60">
            <Col>
                <Card bg="primary" style={cardStyle}>
                <Card.Img variant="top" src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m" />
                <Card.Body>
                    <Card.Title as="h3" className="text-light">Our mission</Card.Title>
                    <Card.Text className="text-light">
                    Your dental concerns come first with us. We strive to provide you with the highest quality dental care; we are sensitive to our patients' needs and encourage open communication about your dental care. Your comfort, appearance and long-range dental health needs will be kept in mind at all times.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="primary" style={cardStyle}>
                <Card.Img variant="top" src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m" />
                <Card.Body>
                    <Card.Title as="h3" className="text-light">Dental team Experience</Card.Title>
                    <Card.Text className="text-light">
                    We offer broad array of services. Our team has the professional experience to realize that there is no such thing as one-size-fits-all treatment, so we never use a one-size-fits-all approach to your dental plan. 
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="primary" style={cardStyle}>
                <Card.Img variant="top" src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m" />
                <Card.Body>
                    <Card.Title as="h3" className="text-light">The Latest Treatments</Card.Title>
                    <Card.Text className="text-light">
                    We provide quality and personalized oral health care using the latest dental technology. By using the latest research and tools, we make sure your time with us is as comfortable and as efficient as possible.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </>
    )
}