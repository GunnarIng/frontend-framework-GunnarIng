import { Link } from "preact-router";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="container">
      <Link href="/?attribute=retention">Retention</Link>
      <Link href="/?attribute=interest">Interest</Link>
      <Link href="/?attribute=usage">Usage</Link>
      <Link href="/?attribute=awareness">Awareness</Link>
    </div>
  );
}
