import { Link } from "preact-router";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="container">
      <Link class="links" href="/?attribute=retention">Retention</Link>
      <Link class="links" href="/?attribute=interest">Interest</Link>
      <Link class="links" href="/?attribute=usage">Usage</Link>
      <Link class="links" href="/?attribute=awareness">Awareness</Link>
    </div>
  );
}
