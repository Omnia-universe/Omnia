import React from 'react'

export default function Home() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <h1>OMNIA</h1>
      <p>A world without limits.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </>
  )
}