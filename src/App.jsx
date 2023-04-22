import React from "react";
import { Link, Route, Routes, Switch } from "react-router-dom";

// import Stories from './Stories';
// import ScrollButton from './ScrolTo';
// import AddToNote from './AddToNote';
// import Search from './Search';
import Main from "./Main";
import NotFound from "./NotFound";

// import { useGlobal } from './Context';  // custom hook

export default function App() {
  return (
    <>
    <Main/>
      {/* <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
    </>
  );
}
