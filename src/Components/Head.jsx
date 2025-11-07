// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'; // ensure Bootstrap is imported
// export const Head  = ({cartshow,setCartshow,showwish,setShowwish}) => {
//     const [showSearch, setShowSearch] = useState(false)

    
//   const toggleSearch = () => {
   
//     setShowSearch(!showSearch)
//     // console.log(showSearch,"searchhhh");
    
//   }
// // const cart = () =>{
// //   setCartshow(cartshow)

// // }

//   return (

//   <div className="Header  container-fluid  border-to">
//       <div className='d-flex justify-content-between '>
//         <div className=''>
//           <span className='head-kiddy '>Kiddy</span><br />
//           <span className='head-dresses'>DRESSES</span>

//         </div>
//         <div className='head-icons d-flex gap-5'>
//           {/* <button onClick={toggleSearch} className="Header-search-btn  " type="button"> */}
//           {showSearch &&(

//             <div className='mt-2' >
//             <input style={{borderRadius:"10px", width:"200px", height:"40px"}} type="text" placeholder='Enter a value'/>
//           </div>
//           )}
   
//        < i onClick={toggleSearch} className="Header-icon fa-solid mt-4  fa-magnifying-glass fa-xl "></i>
//          <i onClick={()=>setCartshow(!cartshow)} className="Header-icon mt-4 fa-solid fa-cart-shopping fa-xl"></i>
//          <i  className="Header-icon  mt-4 fa-regular fa-bell  fa-xl"></i>
//          <i onClick={()=>setShowwish(!showwish)} className="Header-icon mt-4 fa-regular fa-heart fa-xl"></i>
//          <i className="Header-icon mt-4 fa-regular fa-user  fa-xl"></i>



//         </div>
//       </div>
//       <div className='border-top'>
//        <div className='Header-Category d-flex justify-content-center gap-5  border-bottom   container-fluid py-3'>
        
//            <div className="BABIES">
//   <button className="btn dropdown-toggle"  data-bs-toggle="dropdown">
//    BABIES
//   </button>
//   <ul className="dropdown-menu">
//     <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">PANT</a></li>
//     <li><a className="dropdown-item" href="#">TROUSER</a></li>
//   </ul>
// </div>
//            <div className="BOYS">
//   <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
//    BOYS
//   </button>
//   <ul className="dropdown-menu">
//       <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">PANT</a></li>
//     <li><a className="dropdown-item" href="#">TROUSER</a></li>
//   </ul>
// </div>
//            <div className="GIRLS">
//   <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
//    GIRLS
//   </button>
//   <ul className="dropdown-menu">
//       <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">SHIRT</a></li>
//     <li><a className="dropdown-item" href="#">PANT</a></li>
//     <li><a className="dropdown-item" href="#">TROUSER</a></li>
//   </ul>
// </div>

      
//       </div>
//     </div>

// </div>

    
//   )
// }
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Head.css'


export const Head  = ({cartshow,setCartshow,showwish,setShowwish}) => {
    const [showSearch, setShowSearch] = useState(false)
    const [showIcons, setShowIcons] = useState(false) 
   
    const toggleIcons = () => {
      setShowIcons(!showIcons)
    }

  return (
  <div className="Header container-fluid border-to">
      <div className='headr-kidddy d-flex justify-content-between align-items-center'>
        <div>
          <span className='head-kiddy '>Kiddy</span><br />
          <span className='head-dresses'>DRESSES</span>
        </div>

        <button 
          className="btn d-md-none" 
          onClick={toggleIcons}
          style={{ border: "none" }}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>

        <div className={`head-icons d-flex gap-5 ${showIcons ? 'd-flex flex-column position-absolute bg-white p-1 rounded shadow end-0 mt-5' : 'd-none d-md-flex'}`}>
          {showSearch &&(
            <div className='mt-2'>
              <input 
                style={{borderRadius:"10px", width:"200px", height:"40px"}} 
                type="text" 
                placeholder='Enter a value'
              />
            </div>
          )}

          <i onClick={()=>setShowSearch(!showSearch)} className="Header-icon fa-solid mt-4 fa-magnifying-glass fa-xl"></i>
          <i onClick={()=>setCartshow(!cartshow)} className="Header-icon mt-4 fa-solid fa-cart-shopping fa-xl"></i>
          <i className="Header-icon mt-4 fa-regular fa-bell fa-xl"></i>
          <i onClick={()=>setShowwish(!showwish)} className="Header-icon mt-4 fa-regular fa-heart fa-xl"></i>
          <i className="Header-icon mt-4 fa-regular fa-user fa-xl"></i>
        </div>
      </div>

      <div className='border-top'>
        <div className='Header-Category d-flex justify-content-center gap-5 border-bottom container-fluid py-3'>
          <div className="BABIES">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">BABIES</button>
            <ul style={{textAlign:"center"}} className="dropdown-menu">
              <li><a className="dropdown-item" href="#">T-Shirt</a></li>
              <li><a className="dropdown-item" href="#">Shirt</a></li>
              <li><a className="dropdown-item" href="#">Pant</a></li>
              <li><a className="dropdown-item" href="#">Trouser</a></li>
            </ul>
          </div>

          <div className="BOYS">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">BOYS</button>
            <ul style={{textAlign:"center"}} className="dropdown-menu ">
              <li><a className="dropdown-item" href="#">T-Shirt</a></li>
              <li><a className="dropdown-item" href="#">Shirt</a></li>
              <li><a className="dropdown-item" href="#">Pant</a></li>
              <li><a className="dropdown-item" href="#">Trouser</a></li>
            </ul>
          </div>

          <div className="GIRLS">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">GIRLS</button>
            <ul style={{textAlign:"center"}}  className="dropdown-menu">
              <li><a className="dropdown-item" href="#">T-Shirt</a></li>
              <li><a className="dropdown-item" href="#">Shirt</a></li>
              <li><a className="dropdown-item" href="#">Pant</a></li>
              <li><a className="dropdown-item" href="#">Trouser</a></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  )
}
