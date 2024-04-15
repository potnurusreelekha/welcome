// Write your code here
import Component from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learrning</p>
        <button className="button" onClick={this.buttonText} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
