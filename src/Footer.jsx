import { Link } from "preact-router";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="container">
      <Link class="links" href="/retention">Retention</Link>
      <Link class="links" href="/interest">Interest</Link>
      <Link class="links" href="/usage">Usage</Link>
      <Link class="links" href="/awareness">Awareness</Link>
    </div>
  );
}
