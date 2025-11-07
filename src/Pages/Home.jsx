import React, { useEffect, useState } from 'react'
import './Home.css'
import Frame from '../assets/Frame.png';
import { Head } from '../Components/Head'
import Addcart from '../Components/Addcart';
import Wishlist from '../Components/Wishlist';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const [data,setData] = useState([])
  const [single,setSingle] = useState({})
  const [allproduct ,setAllproduct] = useState([])   
  const [whishlistt ,setWishlistt] = useState([])   
  const [cartshow,setCartshow] = useState(false)
 const  [showwish,setShowwish] = useState(false)
const [likedList, setLikedList] = useState([]);  

  useEffect(() => {
  fetch('https://fakestoreapi.com/products/?limit=15')
    .then(res => res.json())
    .then(json => setData(json));
    
    
}, []);
    console.log(data);


 function add(id){
    const result = data.find((value,ind)=>value.id == id)
    const temp = [...allproduct,result]
    setAllproduct(temp)
    console.log(temp,"added");
    // setCart(true)

  
  }


  function whish(id){
    const result1 = data.find((value,ind)=> value.id == id)
    const temp1 = [...whishlistt,result1]
    setWishlistt(temp1)
    console.log(temp1,"whissssssssss");
//     if (likedList.includes(id)) {
//     setLikedList(likedList.filter((itemId) => itemId !== id)); // remove if already liked
//   } else {
//     setLikedList([...likedList, id]); // add if not liked
//  }
    

    
  }
 
  


  return (
    <div>
     <Head cartshow={cartshow} setCartshow={setCartshow} showwish={showwish} setShowwish={setShowwish} />
      {
      
     cartshow &&
     <Addcart  data={data}
     allproduct={allproduct} setAllproduct={setAllproduct}  setCartshow={setCartshow}
     />}
     {
      showwish &&
      <Wishlist data={data} setWishlistt={setWishlistt} whishlistt={whishlistt} setShowwish={setShowwish}/>
     }
     
     <div className='home-image'>
      <img className='img-fluid' src={Frame} alt=""  width=  "100%" />
     </div>
     <div className='home-second'>
      <div>
      <span className='home-cate'>Our Top Categories </span>
       </div>
       <div className='home-ss'>
      <span className='home-sorted'>Sorted By:</span>
      <button  className='home-allcate'>All Category  <i class="fa-solid fa-sliders"></i></button>
    </div>
    
     </div>
     
    <div className="container-fluid mt-4">
      <div className="row">
        {data.map((value,index) => (
          
          <div className="col-12 col-md-6 col-lg-3  mb-4" key={value.id}>
          
            <div className="card h-100 text-center ">
              <button onClick={()=>{whish(value.id); toast.success('💖 Added to wishlist!');}} className='home-heart-button'><i className="home-heart Header-icon mt-4 fa-regular fa-heart fa-xl"></i></button> 
              




              <img
                src={value.image}
                className="card-img-top p-3 img-fluid"
                alt={value.title}
                style={{ height: '200px', objectFit: 'contain' }}
                
              />
                            {/* <button onClick={()=>{whish(value.id); toast.success('💖 Added to wishlist!');}} className='home-heart-button'><i className="home-heart Header-icon mt-4 fa-regular fa-heart fa-xl"></i></button>  */}

              {/* <i class="fa-solid fa-heart"></i> */}
              <div className="card-body">
                <h5 className="card-title">{value.title.slice(0, 20)}...</h5>
                <p className="card-text text-muted">{value.category}</p>
               
                <h6 className=''>Rs {value.price}/
                  <div className='home-star-rate'>
                    <div>
                  <p style={{color:"grey"}}>Rating : {value.rating.rate }</p></div>
                  <div>
                  <i  style={{color:"yellow"}} class="fa-solid fa-star"></i>
                <i style={{color:"yellow"}} class="fa-solid fa-star"></i>
                <i style={{color:"yellow"}} class="fa-solid fa-star"></i>
                <i style={{color:"yellow"}} class="fa-solid fa-star"></i></div></div></h6></div>
                <button onClick={()=>{add(value.id);toast.success(' Added to cart successfully!');}} className="btn btn-danger w-100" >Add to Cart  </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
       <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        // newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    

    </div>
    
  )
}

export default Home

{/* <div className='product-list'>
    <div className="container-fluid mt-4">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center ">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                <p className="card-text text-muted">{product.category}</p>
                <h6>Rs {product.price * 80}/-</h6>
                <button className="btn btn-danger w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}