import "./Chart.jsx"
import "./Footer.css";


export default function Footer(props) {
  return (
    <div class="container">
      <button onClick={() => props.onAttributeChange("retention")}>Retention</button>
      <button onClick={() => props.onAttributeChange("interest")}>Interest</button>
      <button onClick={() => props.onAttributeChange("usage")}>Usage</button>
      <button onClick={() => props.onAttributeChange("awareness")}>Awareness</button>
    </div>
  )
}