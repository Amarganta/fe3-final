import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import GlobalContextProvider from "./Context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
