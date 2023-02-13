import { Component } from "preact"
import { frameworks } from "../data/index.js"
import "./Chart.css"

const attributeToDisplay = "retention"
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
        <div data-cy="chart-header" class="years" style={{ display: "flex" }}>
          <div data-cy="chart-row" style={{ textAlign: "center" }} />
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
            <div style={{ width: "50px", textAlign: "center" }}>{year}</div>
          ))}
        </div>

        {frameworks.map((framework) => {
          const yearsWithStatistics = framework.surveys.map(
            (survey) => survey.year
          )
          const missingYears = [
            2016, 2017, 2018, 2019, 2020, 2021, 2022,
          ].filter((year) => !yearsWithStatistics.includes(year))
          return (
            <div class="frame-names">
              <div class="frame-name">{framework.name}</div>

              {missingYears.map((year) => (
                <div
                  style={{ color: "red", width: "50px", textAlign: "center" }}
                />
              ))}
              {/* cells */}
              {framework.surveys.map((survey) => (
                <div
                  class="numbers"
                  style={{
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                  }}
                >
                  {survey[this.state.attribute]
                    ? survey[this.state.attribute]
                    : "-"}
                </div>
              ))}
              <div class="frame-names-end">{framework.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
