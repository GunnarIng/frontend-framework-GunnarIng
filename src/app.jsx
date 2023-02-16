import { route } from "preact-router";
import { useEffect } from "preact/hooks";
import { Route, Router } from "preact-router";
import Chart from "./Chart.jsx";
import Footer from "./Footer";
import "./app.css";

export function App() {
  useEffect(() => {
    route("/retention", true);
  }, []);

  return (
    <div>
      <header>
        <h1>State of Javascript</h1>
      </header>
      <main>
        <Router>
          <Route path="/:attribute" component={Chart} />
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
