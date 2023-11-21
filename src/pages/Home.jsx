import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addtoWishlist } from "../redux/slices/WishlistSlice";
import { addtoCart } from "../redux/slices/cartSli";
function Home() {
  const data = useFetch("https://fakestoreapi.com/products");
  console.log(data);

  //to call a fn that add avalue to state
  const dispatch= useDispatch()
  return (
    <Row className="m-5">
      {data?.length > 0 ? 
        data?.map((item)=> (
          <Col  className   ="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: "18rem",height:'450px',padding:'2px' }}>
              <Card.Img variant="top" style={{height:'200px'}} src={item.image} />
              <Card.Body>
                <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                <Card.Text>
                 <p>{item.description.slice(0,40)}...</p> 
                 <p>price :   {item.price}₹</p>
                </Card.Text>
                <div className="d-flex justify-content-between ">
                  <Button onClick={()=>dispatch(addtoWishlist(item))}
                    className="d-flex align-items-center "
                    variant="outline-danger rounded"
                  >
                    <i class="fa-solid fa-heart text-danger "></i>{" "}
                  </Button>
                  <Button onClick={()=>dispatch(addtoCart(item))} variant="outline-success rounded">
                    <i class="fa-solid fa-cart-shopping text-black "></i>{" "}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
       : (
        <p>Nothing to display</p>
      )}
    </Row>
  );
}

export default Home;
