import React, { useState } from 'react'
import './Card.scss'
import Numbers from '../Numbers/Numbers'

export function Card({ cardNumber: number }) {
    const [window, setWindow] = useState(
        {
            text: 'Text',
            shoWindov: false
        }
    )

    function handleClick() {
        setWindow(
            {
                text: `Text ${number} `,
                shoWindov: true
            }
        )
        setTimeout(() => setWindow(
            { shoWindov: false }
        ), 3000)
    }

    return (
        <div className='card__container'>
            <Numbers />
            {
                !window.shoWindov
                    ? <div className='title'> Product {number}</div>
                    : <div className='window'>
                        <p className='product'>{`Product ${number}`}</p>
                        <p className='text'>{`${window.text.repeat(5)}`}</p>
                        <p className='text'>{`${window.text.repeat(4)}`}</p>
                        <p className='text'>{`${window.text.repeat(1)}`}</p>

                    </div>
            }
        {/*     test / 1 */}
        {/* test 2 */}

            <div className='footer__container'>
                <div className='label'>Label</div>
                <p className='btn' onClick={handleClick}>Button &rarr;</p>
            </div>
        </div >
    )
}


export default Card
