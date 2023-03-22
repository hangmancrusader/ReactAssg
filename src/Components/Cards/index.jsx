import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ImageComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk2NjQ2MTYxMzIxMzA2MDc5/si202303190110.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          An example of image being displayed by card component 
          in REACT BOOTSTRAP
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageComponent;