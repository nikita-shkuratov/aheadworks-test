import React from 'react'
import './Numbers.scss'

export function Numbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className='number__container'>
            {numbers.map((item, index) => <div key={index} className='number__item'><p>{item}</p></div>)}
        </div>
    )
}

export default Numbers