import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Tracker.css';
import Coin from './Coin';

function Tracker() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
}

const noAllowDrop = (e) =>{
    e.stopPropagation();
}
  useEffect(() => {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      // .then((res) => {
      //   setCoins(res.data);
      //   console.log(res);
      // })
      .then((res) => res.json())
      .then((res) => {
        setCoins(res);      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className='container coin-app' id='coins' draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
      <div className="row">
        <div className='col'>
          <div className='coin-search'>
            <h1 className='coin-text'>Cryptocurrency Prices</h1>
            <form>
              <input
                className='form-control border-0 bg-light coin-input'
                type='text'
                onChange={handleChange}
                placeholder='Search'
              />
            </form>
          </div>
        </div>
      </div>
      <div className='row table-header'>
        <div className='col name-coin'>Coin</div>
        <div className='col symbol-coin'></div>
        <div className='col price-coin'>Price</div>
        <div className='col percent-coin'>24h</div>

      </div>

          {/* Display Coins */}
          <div className='row'>
            <div className='col'>
              {filteredCoins.map(coin => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </div>
          </div>
    </div>

        );
}

        export default Tracker; 