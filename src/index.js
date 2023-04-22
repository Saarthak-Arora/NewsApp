import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './style.css';
import { AppProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>

  /*  <React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>

</React.StrictMode>
 */
);
