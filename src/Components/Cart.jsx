import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cart() {
  const state = useSelector((state)=>state.handleCart); //reducer
  const dispatch = useDispatch();

  const handleClose=(cartItem)=>{
    dispatch(delItem(cartItem)) 
  }
  const cartItems = (cartItem) => {
    return(
    <Container fluid className=" px-4 my-5 bg-light rounded-3" key={cartItem.id}>
    
        <Row className="py-4 justify-content-center">
          
          <Col md={4}>
            
            <img src={cartItem.image} alt={cartItem.title} height='200px' width="180px" />
          </Col>
        <Col md={4}>
          <h3>{cartItem.title}</h3>
          <p className="lead fw-bold">₹ {Math.floor(cartItem.price * 82.66)}</p>
        </Col>
        <Button variant="close" className="float-end" aria-label="close"  onClick={()=>handleClose(cartItem)}>
        
        </Button> 
      </Row>
    
  </Container>)
  
  };
  const emptyCart=()=>{
    return (
      <Container className="py-4">
        <Row variant="py-4">
<Col variant="py-4" className="py-4 justify-content-center"><h3>Your Cart is empty</h3></Col>
        </Row>
      </Container>
    )
  }
  const button=()=>{
    return (
      <Container >
        <Row className="mx-auto" >
          <Col > <Link to='/checkout' className="justify-content-center"  ><Button variant="outline-dark mb-5 w-25  "   onClick={() => console.log("proceed to checkout")}>
            Proceed to checkout
           </Button></Link></Col>
        </Row>
      </Container>
    )
  }
  return(
    <>
    {state.length ===0 && emptyCart()}
    {state.length!==0 && state.map(cartItems)}
    {state.length!==0 && button()}
   
    </>
  );
}

export default Cart;

//!redux
