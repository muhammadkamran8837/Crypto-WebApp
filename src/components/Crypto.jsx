import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Coins from "./Coins";

function Crypto() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (res) => {
        setListOfCoins(res.data.coins);
      }
    ).catch();
  }, []);
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="container">
      {/* Crypto header */}
      <div className="crypto-header flex justify-center">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="w-64 h-10 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Crypto Display */}
      <div className="crypto-display grid grid-cols-1 gap-15 lg:grid-cols-4  ">
        {filteredCoins.map((coin) => {
          return (
            <div
              key={coin.id}
              className="bg-gray-200 p-4 m-5 rounded-[5px] shadow-sm shadow-slate-500"
            >
              <Coins
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crypto;
