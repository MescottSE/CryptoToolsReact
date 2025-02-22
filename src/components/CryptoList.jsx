import React from 'react';

const CryptoList = ({ cryptoData }) => {
  if (!cryptoData || cryptoData.length === 0) {
    return <h2>Loading cryptos...</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Cryptocurrency Prices</h2>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price USD</th>
            <th>Market Cap</th>
            <th>24h Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td>
                <img 
                  src={crypto.image} 
                  alt={crypto.name} 
                  width="30" 
                  height="30" 
                />
              </td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td 
                className={crypto.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
