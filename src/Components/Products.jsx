import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch('https://fakestoreapi.com/products')
      const response = await fetch("http://localhost:5000/products");

      if (ComponentMounted) {
        setData(await response.clone().json()); // creating a copy ie clon
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        ComponentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Row>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
          <Col md={3}>
            <Skeleton height={350} />
          </Col>
        </Row>
      </>
    );
  };

  const filterProduct = (cat) => { //category is key name in json
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <Container
          fluid
          className="d-flex flex-row justify-content-center mb-2 pb-5"
        >
          <Row>
            <Col>
              <Button
                variant="outline-dark me-2  my-2"
                onClick={() => setFilter(data)}
              >
                All
              </Button>
              <Button
                variant="outline-dark me-2  my-2"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </Button>
              <Button
                variant="outline-dark me-2 my-2"
                onClick={() => filterProduct("women's clothing")}
              >
                Woman's Clothing
              </Button>
              <Button
                variant="outline-dark me-2 my-2"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </Button>
              <Button
                variant="outline-dark me-2 my-2"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          <Col className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </Col>
        </Row>
        <Row className="justify-content-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </Row>
        <Row>
          {filter.map((products) => (
            <Col className="md-3 mb-4 w-100">
              <Card className="text-center h-100 p-4" key={products.id}>
                <Card.Img
                  variant="top"
                  height="250px"
                  style={{ width: "10rem" }}
                  src={products.image}
                  alt={products.title}
                />
                <Card.Body className="mb-0">
                  <Card.Title>{products.title.substring(0, 12)}....</Card.Title>
                  <Card.Text className="fw-bold">
                    ₹ {Math.floor(products.price * 82.66)}
                  </Card.Text>
                  <Link to={`/products/${products.id}`}>
                  <Button type="button"
                   //!  <Route path='/products/:id' element={<Product/>}/> 
                    variant="outline-dark"
                    onClick={() => console.log("Primary")}
                  >
                    Buy Now
                  </Button>
                  </Link>

                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
