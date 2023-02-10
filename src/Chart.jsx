import { Component } from "preact"
import { frameworks } from "../data/index.js"
import "./Chart.css"

const attributeToDisplay = "usage"
export default class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attribute: attributeToDisplay,
    }
  }

  handleClick(attribute) {
    this.setState({ attribute: attribute })
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "80px", textAlign: "center" }} />
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
            <div style={{ width: "80px", textAlign: "center" }}>{year}</div>
          ))}
        </div>
      

        {frameworks.map((framework) => {
  const yearsWithStatistics = framework.surveys.map(survey => survey.year)
  const missingYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022].filter(
    year => !yearsWithStatistics.includes(year)
  )
  return (
    <div class="test" style={{ display: "flex" }}>
      <div style={{ width: "80px", textAlign: "center" }}>
        {framework.name}
      </div>
      {missingYears.map(year => (
        <div class="numbers" style={{ width: "80px", textAlign: "center" }} />
      ))}
      {framework.surveys.map((survey) => (
        <div class="numbers" style={{ width: "80px", textAlign: "center" }}>
          {survey[this.state.attribute] ? survey[this.state.attribute] : "-"}
        </div>
      ))}
    </div>
  )
})}

      </div>
    )
  }
}
