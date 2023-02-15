import React from "react";
import Header from "./components/header/Header";
import Trending from "./components/trending/Trending";
import Acutions from "./components/auctions/Auctions"
import Footer from "./components/footer/Footer";
import How from './components/how/How';
// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
// import Link from "../link/Link";
// import classNames from "classnames";



const App =()=> {
  const items = [
    {
      title: 'Digital Currency',
      description: 'You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange',
    },
    {
      title: 'Crypto Wallet',
      description: 'A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.',
    },
    {
      title: 'BUM.',
      description: 'Let\'s connect your wallet to BUM, edit your profile, and begin interacting in the space. ',
    },
  ];
    return (
      <div className="App">
        <Header />
        <Trending/>
        <Acutions/>
        <How
          items={items}
          link="https://example.com"
        />
        <Footer/>
      </div>
    );
  };
  
  export default App;