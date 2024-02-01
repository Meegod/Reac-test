import React from 'react'


function Result({num}) {
  return (
    <div className="mt-4 result">
        <h2>
        NUMBER GUESSED WAS </h2>
        <span>{num}</span>
        </div>
  )
}

export default Result