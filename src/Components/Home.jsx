import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Products from './Products';



function Home() {
  return (
    <>
        <Card className="bg-dark text-white border-0 ">
      <Card.Img src="assets/bgecart.jpg" height='550px' alt=" image" />
      <Card.ImgOverlay className='d-flex flex-column  '>
        <Container >
        <Card.Title className='display-3 mx-auto   fw-bolder mb-1'>NEW SEASON ARRIVALS</Card.Title>
        <Card.Text className='lead fs-2'>
          CHECK OUT ALL THE TRENDS
        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Container>
    
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </>
  )
}

export default Home