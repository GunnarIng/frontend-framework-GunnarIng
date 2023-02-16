import { useRouter } from "preact-router"
import { frameworks } from "../data/index.js"
import "./Chart.css"

export default function Chart() {
  // 
  const [router] = useRouter()


  return (
    // This is the chart
    <div class="data-chart" style={{ display: "flex", flexDirection: "column" }}>
      {/* This is the header in the chart with the years in it */}
      <div data-cy="chart-header" class="years-row">
        <div />
        {[2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
          <div class="years">{year}</div>
        ))}
        <div />
      </div>
         
      {frameworks.map((framework) => {
        // This creates an array of years that have statistics
        const yearsWithStatistics = framework.surveys.map((survey) => survey.year)
        // This creates an array of years that are missing statistics
        const missingYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022].filter(
          (year) => !yearsWithStatistics.includes(year)
        )
        return (
          <div data-cy="chart-row" class="chart-rows">
            <div
              data-cy="row-line"
              class="line"
              style={{ backgroundColor: framework.color, color: framework.color }}
            ></div>

            <div style={{ color: framework.color }}>
              {/* Left Framework names */}
              <div data-cy="chart-cell" class="left-frameworks-names">
                {framework.name}
              </div>
            </div>

            {/* Creates empty divs from years that dont have statistics */}
            {missingYears.map((year) => (
              <div
                class="missing-years"
                data-cy="chart-cell"
                style={{
                  color: framework.color,
                }}
              />
            ))}
            {/* Creates divs with values from years that have statistics */}
            {framework.surveys.map((survey) => (
              <div data-cy="chart-cell">
                <div data-cy="chart-circle" class="circles" style={{ color: framework.color }}>
                  <span class="numbers">
                    {/*Here the value are stored depending on wich attribute that are read. 
                    The router reads from this also so the links show right att.  */}
                    {survey[router.matches.attribute] != null
                      ? `${survey[router.matches.attribute]}%`
                      : null}
                  </span>
                </div>
              </div>
            ))}

            {/* Right Framwork names and gets the names from {framewor.name} */}
            <div
              data-cy="chart-cell"
              class="right-frameworks-names"
              style={{ color: framework.color }}
            >
              {framework.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
