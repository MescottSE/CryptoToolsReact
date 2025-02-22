import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import TestGrounds from './components/TestGrounds'

import './App.css'

function App() {
  const coinMarketCapAPI_key = import.meta.env.VITE_API_KEY_CMC;

  const [cryptos, setCryptos] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
          {
            method: "GET",
            headers: {
              "X-CMC_PRO_API_KEY": coinMarketCapAPI_key,
              "Accept": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Data is: " + data);

        setCryptos(data); // CoinMarketCap returns data inside "data"

      } catch (error) {
        console.error("Error fetching data:", error.message);
        console.error("Stack trace:", error.stack); // Log the error stack for better debugging
      }
    };
      
    fetchCryptoData();
  }, []);

  return (
    <>
      <Header></Header>
      {/* <TestGrounds /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage cryptoListData={cryptos}/>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App
