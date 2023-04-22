import React, {useState} from 'react';
import './style.css'
const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <>
    <div style={{display:"flex",msFlexDirection:'row-reverse'}}>
	<button className = 'myBtn' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><i className="fa fa-arrow-circle-up" style={{fontSize:'48px',color:'black'}}></i></button>
    </div>
    </>

);
}

export default ScrollButton;
