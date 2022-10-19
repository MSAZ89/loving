import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ContactCard() {
  return (
    <div className='text-center mt-60 mx-auto'>
    <Card bg="primary" className="text-light" style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title as="h2" className='font-weight-bold py-4'>Schedule Your Appointment Today!</Card.Title>
        <Card.Subtitle className="mb-2" as="h4">Loving Family Dental</Card.Subtitle>
        <Card.Text>
            16838 East Palisades Boulevard A-111, Fountain Hills, Arizona 85268, United States
        </Card.Text>
        <div className='text-center mb-20'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8801281729257!2d-111.71903228479661!3d33.60841458072905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b988817b0a5db%3A0x23fea187711e6684!2sLoving%20Family%20Dental!5e0!3m2!1sen!2sus!4v1666215247284!5m2!1sen!2sus" width="85%" height="300px" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Button size="lg" variant="outline-light" href="/contact">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ContactCard;