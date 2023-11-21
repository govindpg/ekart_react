import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeallfromcart, removefromcart } from '../redux/slices/cartSli';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const cartArr=useSelector((state)=>state.cartSl)
  console.log(cartArr);
  const dispatch=useDispatch()
  const [pric,setPric]=useState(0)
  const navigate=useNavigate()
  const getTotal=()=>{
    if(cartArr.length>0){
      setPric(cartArr.map((item)=>item.price).reduce((p1,p2)=>p1+p2))

    }else{
      setPric(0)
    }
  }

  const handleclos=()=>{
    alert("order placed sucessfully")
    dispatch(removeallfromcart())
    navigate("/") 

  }

  useEffect(()=>{
    getTotal()
  },[cartArr])

  return (
    <div style={{marginTop:'150px',marginLeft:'100px'}}>
      
        {
          cartArr?.length>0?<div className='row w-100'>
          <div className='col-lg-6'>
        <table className='table border shadow'>

        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cartArr?.map((item,index)=>(
             <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img alt='no image' width={'100px'} src={item.image}></img></td>
            <td>{item.price}€</td>
            <td><Button onClick={()=>dispatch(removefromcart(item.id))} variant='outline-danger rounded'><i class='fa-solid fa-trash'></i></Button></td>
            </tr>
          ))}
         
            </tbody>
      </table>
        </div>
        <div className=' col-lg-4 d-flex justify-content-center  align-items-center flex-column' >
          <div className='border b shadow p-5'>
            <h1>Cart summary</h1>
            <h4>Total summary:<span className='fw-bold fs-4'> {cartArr.length}</span></h4>
            <h4>Price :€{pric}</h4>
            <button onClick={handleclos} className='btn btn-primary'>Buy Now</button>
            </div>
        </div>
         </div>
        
        :(
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src='https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif'/>
          <h4>Nothing in the Cart</h4>
          <Button variant="outline-success rounded "  ><Link style={ {textDecoration:'none'}}to="/">Home</Link></Button>
        </div>
      )
        }
        
     
      


    </div>
  )
}

export default Cart