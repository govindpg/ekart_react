import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
       <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center flex-column w-100'>
       <div className=' d-flex p-3 bg-primary align-items-center justify-content-evenly w-100 '>
       <div className="websites " style={{width:'400px'}}>
       
      <h3 className=' text-white'> <i class="fa-solid fa-cart-shopping text-white ms-2"  ></i> <Link style={{textDecoration:'none',color:'white'}} to={'/'}>EKart</Link></h3> 
      <p className='text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.dfvhgsd Debitis, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae ducimus perferendis labore?
       </p>
       
       </div>
       <div className="links d-flex  flex-column">
         
         <h4 className='links  text-white'>Links</h4>
        
         <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
         <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
       
 
       </div>
   
       <div className="contacts">
       <h4 className='text-white'>Contact us</h4>
       <div className='d-flex mb-2'>
         <input type='text' className='form-control rounded-3 h-50' placeholder='enter your email'/>
         <button className='btn btn-info rounded-3 h-50 mb-3 ms-2'>Submit</button>
       </div>
     
       </div>
 
       </div>
       <p className='mt-5'>Copyright @2023 ,Built with react</p>
     </div>
  )
}

export default Footer