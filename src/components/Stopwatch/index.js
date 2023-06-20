// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  OnIncreaseTime = () => {
    const {seconds} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
    if (seconds === 59) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    }
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.OnIncreaseTime, 1000)
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({seconds: 0, minutes: 0})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {minutes, seconds} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="card-container">
          <div className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p>Timer</p>
          </div>
          <p>{this.getElapsedSecondsInTimeFormat()}</p>
          <div className="button-container">
            <button
              className="start-button"
              type="button"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
