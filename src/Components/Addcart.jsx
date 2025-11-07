import React from 'react'
import './Addcart.css'
const Addcart = ({data,allproduct,setAllproduct,cart,setCart,setCartshow}) => {
  console.log(allproduct,"alproduct");
  
  return (
    <>
  
    <div className='add-cart'>
      <div className='add-cart-cart-cross d-flex justify-content-around '>
          <div>
          <span className='cart-cart'>Cart</span>
      </div>
      <div>
          <i onClick={()=>setCartshow(false)} class="fa-etch fa-solid fa-xmark fa-2xl"></i>
      </div>
      </div>
      
      
        { (

          
          allproduct.map((value)=>(
          
            <div className='add-cart-content'>
              
              <div className='add-cart-content-image py-1'>
              <div>
                <img src={value.image} alt="hgvh" style={{height:"140px" ,width:"150px"}}  />
              </div>
              <div>
                <span className='add-cart-title'>{value.title.slice(0, 20)}</span><br />
                <span className='add-cart-describtion'>{value.description.slice(0, 70)}...</span><br /><br />
                 <div className='d-flex gap-5'>
               <div>
                <span className='add-cart-price'>{value.price}/-</span></div>
                <div>
                <button className='add-cart-button-minus'><i class="fa-sharp fa-solid fa-minus"></i></button><span><input style={{width:"40px"}} type="text" /></span>
                <button className='add-cart-button-plus'><i class="fa-solid fa-plus"></i></button></div></div>
              </div>
              </div>
            </div>
          ))
        )
        }
        
        </div>
    </>
  )
}

export default Addcart
