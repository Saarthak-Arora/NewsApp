// what does context api do
// we can pass the props to that componenet(child) where that prop is needed rather then passing to every descending child of parent

// steps to follow

//  create context
//  provider
//  consumer or we can use useContext

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

// let api2 = 'https://newsdata.io/api/1/news?apikey=pub_11042a2fb441a0756e59a0c00d01c824a04b4&'

const apiKey = "b52ac3e9a19e22d4ab23f4103d1d14ea";

let api = `https://gnews.io/api/v4/search?q=`;

const initialState = {
  isLoading: true,
  q: "world",
  hits: [],
  arr: [],
  a: [],
  india: [],
  Buisness: [],
};

// create context
const AppContext = React.createContext();

// create provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);

      dispatch({
        type: "get_news",
        payload: {
          Narticles: data.articles,
        },
      });

      setTimeout(async () => {
        const res2 = await fetch(
          `https://gnews.io/api/v4/search?q=india&token=${apiKey}&lang=en`
        );
        const data2 = await res2.json();

        dispatch({
          type: "get_india",
          payload: {
            Narticles: data2.articles,
          },
        });
      }, 10000);

      setTimeout(async () => {
        const res3 = await fetch(
          `https://gnews.io/api/v4/search?q=politics&token=${apiKey}&lang=en`
        );
        const data3 = await res3.json();

        dispatch({
          type: "get_buisness",
          payload: {
            Narticles: data3.articles,
          },
        });
      }, 20000);

      //
    } catch {
      return <h1>Sorry Some Error</h1>;
      //console.log('error');
    }
  };

  const removePost = (post_id) => {
    dispatch({ type: "remove_Post", payload: post_id });
  };

  const addPost = (post_id) => {
    dispatch({ type: "add_Post", payload: post_id });
  };

  const removePostI = (post_id) => {
    dispatch({ type: "remove_PostI", payload: post_id });
  };

  const addPostI = (post_id) => {
    dispatch({ type: "add_PostI", payload: post_id });
  };

  const removePostB = (post_id) => {
    dispatch({ type: "remove_Post", payload: post_id });
  };

  const addPostB = (post_id) => {
    dispatch({ type: "add_PostB", payload: post_id });
  };

 

  const rmPost = (post_id) => {
    // console.log(post_id);
    dispatch({ type: "rm_Post", payload: post_id });
  };

  const search = (val) => {
    if (val == "") val = "india";
    dispatch({ type: "searchPost", payload: val });
  };

  useEffect(() => {
    fetchApiData(`${api}${state.q}&token=${apiKey}&lang=en`);
  }, [state.q]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, addPost, rmPost, search,removePostI,removePostB,addPostB,addPostI }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
// when we return a hook in our function then that function is known as custom hook
const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
