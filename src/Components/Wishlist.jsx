import React from 'react'
// import './Addcart.css'
import './Wishlist.css'

const Wishlist = ({whishlistt,data,setWishlistt,setShowwish}) => {
  return (
    <>
    <div className='add-wish'>
      <div className='add-wish-wish-cross d-flex justify-content-around '>
          <div>
          <span className='wish-wish'>Wish List</span>
      </div>
      <div>
          <i onClick={()=>setShowwish(false)} class="fa-etch fa-solid fa-xmark fa-2xl"></i>
      </div>
      </div>
      
      
        { (

          
        whishlistt.map((value)=>(
            
            <div className='add-wish-content'>
              
              <div className='add-wish-content-image py-1'>
              <div>
              <img  src={value.image} alt="hgvh" style={{height:"140px" ,width:"150px"}}  />
              </div>
              <div>
                <span className='add-wish-title'>{value.title.slice(0, 20)}</span><br />
                <span className='add-wish-describtion'>{value.description.slice(0, 70)}...</span><br /><br />
                 <div className='d-flex gap-5'>
               <div>
                <span className='add-wish-price'>{value.price}/-</span></div>
                <div>
                <button className='add-wish-button-minus'><i class="fa-sharp fa-solid fa-minus"></i></button><span><input style={{width:"40px"}} type="text" /></span>
                <button className='add-wish-button-plus'><i class="fa-solid fa-plus"></i></button></div></div>
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

export default Wishlist
