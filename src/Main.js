import React  from 'react'
import Stories from './Component/Stories';
import ScrollButton from './Component/ScrolTo';
import AddToNote from './Component/AddToNote';
import Search from './Component/Search';
import HomeImage from "./NewsHome.jpg";



export default function Main() {
  return (
   
   <div className="mainpage">

   <img className='HomeImage' src={HomeImage}/>

      <AddToNote/>
        <Search/>
        <Stories/>
        <ScrollButton/>

        </div>
  
  )
}
