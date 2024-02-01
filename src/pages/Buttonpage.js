import React,{useState} from "react";
import Button from "../components/Button";
import "../css/styles.css";
import Result from "../components/Result";


function Buttonpage() {
    const [rand, setRand] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div>
      <Result num={rand} />
      <Button  _total={total} _setTotal={setTotal}  _setRand={setRand}/>
      <h2>{(total < 10 ? (total > 5 ? 'Almost there': total) : 'Game over')}</h2>

    </div>
  );
}

export default Buttonpage;
