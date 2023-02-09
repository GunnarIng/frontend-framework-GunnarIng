// import { Component } from "preact"
// import { frameworks } from "../data/index.js"

// const attributeToDisplay = "usage"
// export default class Chart extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       attribute: attributeToDisplay,
//     }
//   }

//   handleClick(attribute) {
//     this.setState({ attribute: attribute })
//   }

//   render() {
//     return (
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div style={{ display: "flex" }}>
//           <div style={{ width: "100px", textAlign: "center" }} />
//           {frameworks[0].surveys.map((survey) => (
//             <div style={{ width: "100px", textAlign: "center" }}>
//               {survey.year}
//             </div>
//           ))}
//         </div>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <button onClick={() => this.handleClick("retention")}>
//             Retention
//           </button>
//           <button onClick={() => this.handleClick("interest")}>Interest</button>
//           <button onClick={() => this.handleClick("usage")}>Usage</button>
//           <button onClick={() => this.handleClick("awareness")}>
//             Awareness
//           </button>
//         </div>
//         {frameworks.map((framework) => (
//           <div style={{ display: "flex"}}>
//             <div style={{ width: "100px", textAlign: "center" }}>
//               {framework.name}
//             </div>
//             {framework.surveys.map((survey) => (
//               <div style={{ width: "100px", textAlign: "center" }}>
//                 {survey[this.state.attribute]}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     )
//   }
// }