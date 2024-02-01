import React, { useState } from 'react'
import '../css/styles.css';
import Result from './Result';

function Button() {

    const [rand, setrand] = useState(0);
    const [score, setScore] = useState(50)


    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setrand(randomNumberInRange(1, 5));
    }


    return (
        <>
            <div className=''>
                <Result num={rand} />
                <button className='btn flex'
                    onClick={handleClick}
                >Generate a Random Number CLick Me!!</button>
            </div>
            <h2>{score}</h2>

        </>

    )
}

export default Button