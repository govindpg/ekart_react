import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to acess the state
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const cart=useSelector((state)=>state.cartSl)
  return (
       <Navbar expand="lg" className="bg-body-primary   bg-primary">
       <Container>
         <Navbar.Brand href="#home"> <i class="fa-solid fa-cart-shopping text-white ms-2"  ></i> <Link style={{textDecoration:'none',color:'white'}}  to={""}>E Kart</Link>  </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto ">
             <Nav.Link className='border ' href="#home"> <i class="fa-solid fa-heart text-danger ms-2"  ></i> <Link style={{textDecoration:'none',color:'white'}}  to={"/wishlist"}>   Wishlist <Badge className='ms-1' bg="secondary">{wishlist?.length}</Badge></Link></Nav.Link>
             <Nav.Link className='border'  href="#link"><Link style={{textDecoration:'none',color:'white'}}  to={"/cart"}>  Cart <Badge className='ms-1'   bg="secondary">{cart?.length}</Badge></Link> </Nav.Link>
             
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
  )
}

export default Header