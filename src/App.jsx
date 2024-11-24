import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className={'text-3xl text-green-600 font-bold'}>HELLO WORLD</h1>
      </div> 
    </>
  )
}

export default App
