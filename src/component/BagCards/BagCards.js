import React, { useState } from 'react'
import './BagCards.css'

function BagCards({imgUrl,title,desc,price}) {

  const [currentImg, SetCurrentImg] =useState(imgUrl);
  const imgUrl1 = "https://assets.ajio.com/medias/sys_master/root/20230628/9hYw/649bd227eebac147fc2100f3/-473Wx593H-465916723-rosegold-MODEL.jpg"    
  return (
    <>
    <div className='bag-cards'>
    <img src={currentImg} 
    className='card-image' 
    onMouseOver={()=>{SetCurrentImg(imgUrl1)}}
    onMouseOut={()=>{SetCurrentImg(imgUrl)}}/>
    <h3 className='title'>{title}</h3>
    <p>{desc}</p>
    <p>{price}</p>
    </div>
    </>
  )
}

export default BagCards