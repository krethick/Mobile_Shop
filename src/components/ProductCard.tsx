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
import { useSelector } from "react-redux";


export default function App() {

  //const items: any[] = useSelector((state: any) => state.allCart.items);
  const items = useSelector((state:any) => state.allCart.items);

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className='mb-3'>
          {items.map((item: any) => (
            <MDBCol key={item.id} size='md'>
              <MDBCard>
                <MDBCardImage
                  src={item.img}
                  position='top'
                  alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                      ${item.price}
                  </MDBCardText>
                  <MDBBtn href='#'>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
