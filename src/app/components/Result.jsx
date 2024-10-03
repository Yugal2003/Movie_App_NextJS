import React from 'react'
import Cart from './Cart'

const Result = ({results}) => {
    
  return (
    <div>
        {
            results.map((result) =>(
                <Cart key="result.id" result={result}/>
            ))
        }
    </div>
  )
}

export default Result