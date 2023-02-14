import React from "react";
import Header from "./components/header/Header";
import Trending from "./components/trending/Trending";
import Acutions from "./components/auctions/Auctions"
import Footer from "./components/footer/Footer";
// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
// import Link from "../link/Link";
// import classNames from "classnames";



const App =()=> {
    return (
      <div className="App">
        <Header />
        <Trending/>
        <Acutions/>
        <Footer/>
      </div>
    );
  };
  
  export default App;