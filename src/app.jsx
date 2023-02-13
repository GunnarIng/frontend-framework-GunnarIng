import "./app.css"
import Chart from "./Chart.jsx"
import Footer from './Footer';




export function App() {
  return (
    <div>
      <header data-cy="chart-header" ><h1>State of Javascript</h1></header>
      <main>
        <Chart />
      </main>
      <footer>
       <Footer />
      </footer>
    </div>
  )
}

export default App
