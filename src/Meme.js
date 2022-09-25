import { useGlobal } from "./Context"
import {useState} from "react";
import  Search  from "./Search";
import './style.css'


export default function Meme() {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg' 
    })
    
    const {hits} = useGlobal();
    if(hits.length === 0 ){
        return <h1 style={{color : 'wheat'}}>NO DATA FOUND ...</h1>
    }

    
    
   
   let ima = [];

   

   hits?.map((curr,i)=>{
    ima.push(curr.image);
   })

    

    
   /*  const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg' 
    })
     */


    // const [allMemes, setAllMemes] = React.useState([])
    

    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])
    
    
    
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * ima.length)
        const url = ima[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div class="meme_search">
            <Search/>
            </div>
        
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new image 🖼
                </button>
            </div>
            <div className="meme">
                <img  src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
    
}