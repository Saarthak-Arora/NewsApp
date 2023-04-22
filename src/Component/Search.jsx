import React,{useRef} from 'react'
import './style.css'
import { useGlobal } from "../Context";

const Search = () => {
    const{search} = useGlobal();
    const inputRef = useRef(null);

  

    const clickO = () =>{
        //console.log(inputRef.current.value);
         search(inputRef.current.value);
    }
  return (
    <>
        {/* <input type='text' className = 's' placeholder='enter topic'onKeyUp={(e)=>search(e.target.value)}/> */}
        <span className='Sb'>
            <input type='text' className = 'sea' placeholder='Enter Topic' name='forsearch'  ref={inputRef}/>
            <button className='searchBtn' onClick={clickO}>Search</button>
        </span>
    </>
    );
}

export default Search