import { useRouter } from "preact-router"
import { frameworks } from "../data/index.js"
import "./Chart.css"

export default function Chart() {



  const [router, setRouter] = useRouter()

  console.log(router.matches.attribute)



  return (
    <div class="data-chart" style={{ display: "flex", flexDirection: "column" }}>
      <div data-cy="chart-header" class="years-row">
        <div />
        {[2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
          <div class="years">{year}</div>
        ))}
        <div />
      </div>

      {frameworks.map((framework) => {
        const yearsWithStatistics = framework.surveys.map((survey) => survey.year)
        const missingYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022].filter(
          (year) => !yearsWithStatistics.includes(year)
        )
        return (
          <div data-cy="chart-row" class="frame-names">
            <div
              data-cy="row-line"
              class="line"
              style={{ backgroundColor: framework.color, color: framework.color }}
            ></div>

            <div class="framework" style={{ color: framework.color }}>
              <div
                data-cy="chart-cell"
                class="left-frameworks-names {
                  "
              >
                {framework.name}
              </div>
            </div>

            {missingYears.map((year) => (
              <div
                data-cy="chart-cell"
                style={{
                  color: framework.color,
                  width: "54px",
                  textAlign: "center",
                }}
              />
            ))}

            {framework.surveys.map((survey) => (
              <div data-cy="chart-cell">
                <div data-cy="chart-circle" class="circles" style={{ color: framework.color }}>
                  <span class="numbers">
                    {/* This reads out each value and add a % symbol */}
                    {survey[router.matches.attribute] != null ? `${survey[router.matches.attribute]}%` : null}
                  </span>
                </div>
              </div>
            ))}

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
