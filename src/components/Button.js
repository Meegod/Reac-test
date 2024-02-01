import React from "react";

function Button({_setTotal,_setRand,_total}) {
    let counter =0;

   const handleClick = () => {
    let  radnum = Math.floor(Math.random() * 6) + 1;
    _setRand(radnum)
    console.log(radnum);

     radnum =(counter < 1 ? radnum + 2 : radnum);
     counter++;
    _setTotal(prev =>prev + radnum)
  };

  return (
    <button disabled ={(_total > 9 ? true :false)}  className="btn flex" onClick={handleClick}>
      Generate a Random Number CLick Me!!
    </button>
  );
}

export default Button;
