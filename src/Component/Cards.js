import React from "react";
import { useGlobal } from "../Context";

const Cards = (curr, i) => {
  const { removePost, addPost } = useGlobal();
 
  return (
    <>
      <div className="card cardCust">
        <img src={curr.c.image} alt="no-image" className="card-img-top cardI" />

        <div className="card-body">
          <h2 className="card-text">{curr.c.title}</h2>
          <h4>{curr.c.description}</h4>
          <h6>BY {curr.c.source.name}</h6>
        </div>
        <div className="card-body">
          <a href={curr.c.url} className="card-link">
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
};

export default Cards;
