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
              
              <div class="framework" style={{ color: framework.color }}>
               <div class="frameworks-name">{framework.name}</div> 
              </div>

              {missingYears.map((year) => (
                <div
                  style={{ color: framework.color, width: "50px", textAlign: "center" }}
                />
              ))}
              {/* cells */}
              {framework.surveys.map((survey) => (
                <div class="circles" style={{ color: framework.color }}>
                  
                  <div class="numbers"> 
                  <div class="hr" style={{ color: framework.color }} >
                  {/* <hr style={{ color: framework.color }} /> */}
                  
                    {survey[this.state.attribute]
                      ? survey[this.state.attribute]
                      : "-"}
                      <div/>
                  </div>
                  </div>
                </div>
              ))}
              <div class="frame-names-end" style={{ color: framework.color }}>
                {framework.name}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
