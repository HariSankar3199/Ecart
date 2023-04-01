import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { NavLink, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const [addcart, setAddcart] = useState("Add to cart");
  const { id } = useParams();
  const [product, setProduct] = useState([]);//o/p data
  const [loading, setLoading] = useState(false);

  //redux
  const dispatch = useDispatch(); // storing use Dispatch in a variable
  const addProduct = (product) => {
   
    if (addcart === "Add to cart") {
      dispatch(addItem(product)); // =>actions->index.js-> fn
      setAddcart("Remove from cart");
    }
    else{
      dispatch(delItem (product)); 
      setAddcart("Add to cart")
    }
  }; 
  //

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={6}>
              <Skeleton height={400} />
            </Col>

            <Col md={6} style={{ lineHeight: 2 }}>
              <Skeleton height={50} width={300} />
              <Skeleton height={75} />
              <Skeleton height={25} width={150} />
              <Skeleton height={50} />
              <Skeleton height={150} />
              <Skeleton height={50} width={100} />
              <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={6}>
              <img
                height="400rem"
                width="350rem"
                src={product.image}
                alt={product.title}
              />
            </Col>
            <Col md={6}>
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>

              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
                {" "}
                ₹ {Math.floor(product.price * 82.66)}
              </h3>
              <p className="lead">{product.description}</p>

              <Button
                variant="outline-dark px-4 py-2"
                onClick={() => addProduct(product)}//! so that on clicking it changes to remove from cart
              >
                {addcart} 
              </Button>
              <Link
                to="/cart"
                
  
              >
                <Button variant="outline-dark px-4 py-2 ms-2" onClick={() => console.log("Primary")}>
                Go to cart
                </Button>
               
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  return (
    <>
      <Container>
        <Row className="py-5 px-2">
          <Col>{loading ? <Loading /> : <ShowProduct />}</Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Product;
