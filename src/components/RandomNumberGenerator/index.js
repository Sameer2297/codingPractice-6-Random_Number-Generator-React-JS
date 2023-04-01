import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNum = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({num: newNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generateNum}>
            Generate
          </button>
          <p className="value">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
