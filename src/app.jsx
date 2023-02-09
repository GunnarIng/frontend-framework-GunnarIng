// import { useState } from 'preact/hooks'
import "./app.css"
import Chart from "./Chart.jsx"

export function App() {
  return (
    <div>
      <header>State of Javascript</header>
      <main>
        <Chart />
      </main>
      <footer>Nav Links</footer>
    </div>
  )
}

export default App
