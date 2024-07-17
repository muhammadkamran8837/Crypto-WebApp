import React from "react";

function Coins(props) {
  return (
   <div className="flex flex-col gap-4 items-center text-center justify-center ">
    <div className=""><img className="w-20 h-20"  src={props.icon} alt="" /></div>
    <div><h1>Name: {props.name}</h1>
          <h3>Symbol: {props.symbol}</h3>
          <h3>Price: {props.price}</h3></div>

   </div>
  );
}

export default Coins;

{
  /* <div>
          <img  src={props.icon} alt="" />
        </div>
        <div>
          <h1>Name: {props.name}</h1>
          <h3>Symbol: {props.symbol}</h3>
          <h3>Price: {props.price}</h3>
        </div> */
}
