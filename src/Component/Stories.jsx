import { useGlobal } from "../Context";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards.js";

const Stories = () => {
  const { removePostB, addPostB,removePostI, addPostI,removePost, addPost,india, Buisness, hits, isLoading } = useGlobal();
  
 if(isLoading | hits === undefined){
  return (<>
  <Container className="storySection">
    <h1>Loading ..... </h1>
    </Container>
  </>)
 }

  return (
   
    <>
      <Container className="storySection">
  
     
        <Row>
          <Col>
          
            {india?.map((curr, i) => {
              return (
    <>
      <div className="card cardCust">
        <img src={curr.image} alt="no-image" className="card-img-top cardI" />

        <div className="card-body">
          <h2 className="card-text">{curr.title}</h2>
          <h4>{curr.description}</h4>
          <h6>BY {curr.source.name}</h6>
        </div>
        <div className="card-body">
          <a href={curr.url} className="card-link">
            Read More
          </a>
          <button
            type="button"
            className="card-link"
            onClick={() => removePostI(i)}
          >
            Remove
          </button>
          <button
            type="button"
            className="card-link"
            onClick={() => addPostI(i)}
          >
            Add To Notes
          </button>
        </div>
      </div>
    </>
  );
            })}
          </Col>
          <Col>
            {hits?.map((curr, i) => {
              return (
    <>
      <div className="card cardCust">
        <img src={curr.image} alt="no-image" className="card-img-top cardI" />

        <div className="card-body">
          <h2 className="card-text">{curr.title}</h2>
          <h4>{curr.description}</h4>
          <h6>BY {curr.source.name}</h6>
        </div>
        <div className="card-body">
          <a href={curr.url} className="card-link">
            Read More
          </a>
          <button
            type="button"
            className="card-link"
            onClick={() => removePost(i)}
          >
            Remove
          </button>
          <button
            type="button"
            className="card-link"
            onClick={() => addPost(i)}
          >
            Add To Notes
          </button>
        </div>
      </div>
    </>
  );
            })}
          </Col>
          <Col>
           
            {Buisness?.map((curr, i) => {
              return (
    <>
      <div className="card cardCust">
        <img src={curr.image} alt="no-image" className="card-img-top cardI" />

        <div className="card-body">
          <h2 className="card-text">{curr.title}</h2>
          <h4>{curr.description}</h4>
          <h6>BY {curr.source.name}</h6>
        </div>
        <div className="card-body">
          <a href={curr.url} className="card-link">
            Read More
          </a>
          <button
            type="button"
            className="card-link"
            onClick={() => removePostB(i)}
          >
            Remove
          </button>
          <button
            type="button"
            className="card-link"
            onClick={() => addPostB(i)}
          >
            Add To Notes
          </button>
        </div>
      </div>
    </>
  );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
    
             
};


export default Stories;
