import React from 'react'
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromWishlist } from '../redux/slices/WishlistSlice';
import { addtoCart } from '../redux/slices/cartSli';

function Wishlist() {
  const wishlistArray =useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch= useDispatch()

  const handlewishlist=(item)=>{
    dispatch(addtoCart(item))
    dispatch(removefromWishlist(item.id))
  }

  return (
    <div>
       <Row className="m-5">
      {wishlistArray?.length>0 ?
      wishlistArray?.map((item)=>(

        <Col  className   ="mb-5" sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: "18rem",height:'450px',padding:'2px' }}>
          <Card.Img src={item.image} variant="top" style={{height:'200px'}}  />
          <Card.Body>
            <Card.Title>{item.title.slice(-20)}</Card.Title>
            <Card.Text>
             <p>{item.description.slice(0,50)}</p> 
             <p>price : {item.price}  ₹</p>
            </Card.Text>
            <div className="d-flex justify-content-between ">
              <Button onClick={()=>dispatch(removefromWishlist(item.id))}
                className="d-flex align-items-center "
                variant="outline-danger rounded"
              >
                <i class="fa-solid fa-trash text-danger "></i>{" "}
              </Button>
              <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded">
                <i class="fa-solid fa-cart-shopping text-black "></i>{" "}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      )):(
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src='https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif'/>
          <h4>Nothing in the Cart</h4>
          <Button variant="outline-success rounded "  ><Link  style={ {textDecoration:'none'}}to="/">Home</Link></Button>
        </div>
      )}  
    
     
      
       
    </Row>


    </div>
  
)}

export default Wishlist