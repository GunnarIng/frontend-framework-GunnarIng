import { Route, Router } from "preact-router";
import "./app.css";
import Chart from "./Chart.jsx";
import Footer from "./Footer";

export function App() {
  return (
    <div>
      <header>
        <h1>State of Javascript</h1>
      </header>
      <main>
        <Router>
          <Route path="/" component={Chart} />
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
