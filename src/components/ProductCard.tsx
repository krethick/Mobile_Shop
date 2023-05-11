import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="m-2">
       <MDBContainer>
       <MDBRow className='mb-3'>
       <MDBCol size='4'>
      <MDBCard>
        <MDBCardImage
      src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
      position='top'
      alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
  );
}