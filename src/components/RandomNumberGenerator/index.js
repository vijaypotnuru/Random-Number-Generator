import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onRandomNumber = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: random})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="note">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomNumber}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
