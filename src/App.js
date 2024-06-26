
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const App = () => {
  const prenom = " DREAM ";

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        MY , {prenom ? prenom : "là"} !
        {prenom && <img src="https://i.pinimg.com/474x/71/9f/3d/719f3d8a7ff00d7be58d722de2c3ec35.jpg" alt="Additional" />}
      </div>
<>

</>
     
    </Container>
  );
};

export default App; 