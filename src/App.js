import React from 'react'
import Card from './components/Card/Card'

function App() {

  const cards = [1, 2, 3, 4, 5, 6]

  return (
    <div className='main__contaner'>
      {cards.map((item, index) => <Card key={index} cardNumber={item} />)}
    </div>
  )
}

export default App
