import { Component } from "preact"
import { frameworks } from "../data/index.js"
import "./Chart.css"
// import Footer from "./Footer.jsx";

export default class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attribute: "retention",
    }
  }

  handleAttributeChange = (attribute) => {
    this.setState({ attribute: attribute })
  }

  render() {
    return (
      <div
        class="data-chart"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div data-cy="chart-header" class="years-row">
          <div />
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
            <div style={{ width: "50px", textAlign: "center" }}>{year}</div>
          ))}
          <div />
        </div>

        {frameworks.map((framework) => {
          const yearsWithStatistics = framework.surveys.map(
            (survey) => survey.year
            )
          const missingYears = [
            2016, 2017, 2018, 2019, 2020, 2021, 2022,
          ].filter((year) => !yearsWithStatistics.includes(year))
          return (
            <div data-cy="chart-row" class="frame-names">
              <div
                data-cy="row-line"
                class="line"
                style={{ backgroundColor: framework.color }}
              ></div>
              <div class="framework" style={{ color: framework.color }}>
                <div data-cy="chart-cell" class="frameworks-name">
                  {framework.name}
                </div>
              </div>

              {missingYears.map((year) => (
                <div
                style={{
                  color: framework.color,
                  width: "54px",
                  textAlign: "center",
                }}
                />
                ))}

              {framework.surveys.map((survey) => (
                <div data-cy="chart-cell">
                  <div
                    data-cy="chart-circle"
                    class="circles"
                    style={{ color: framework.color }}
                  >
                    <span class="numbers">
                      {/* <hr style={{ color: framework.color }} /> */}
                      {/* This reads out each value and add a % symbol */}
                      {survey[this.state.attribute]
                        ? `${survey[this.state.attribute]}%`
                        : "-"}
                    </span>
                  </div>
                </div>
              ))}

              <div
                data-cy="chart-cell"
                class="frame-names-end"
                style={{ color: framework.color }}
              >
                {framework.name}
              </div>

              {/* <Footer onAttributeChange={this.handleAttributeChange} /> */}
            </div>
          )
        })}
      </div>
    )
  }
}
