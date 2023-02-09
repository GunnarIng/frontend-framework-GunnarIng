import { Component } from "preact"
import "../data/index.js"

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return <p>Time is: {this.state.date.toLocaleTimeString()}</p>
  }
}
