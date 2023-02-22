import {Component} from 'react'

import './index.css'

// YET_TO_REGISTER
// REGISTERED
// REGISTRATIONS_CLOSED

class ActiveRegistartion extends Component {
  render() {
    const {lists} = this.props
    const {registrationStatus} = lists
    let output

    if (registrationStatus === 'YET_TO_REGISTER') {
      output = (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="yettoregister"
          />
          <p className="first-para">
            A live performance brings so much to your relationship with dance
            Seeing dance live can often make you fall totally in love with this
            beatiful art form
          </p>
          <div className="button-div">
            <button type="button" className="registerbutton">
              Register Here
            </button>
          </div>
        </div>
      )
    } else if (registrationStatus === 'REGISTRATIONS_CLOSED') {
      output = (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="yettoregister"
          />
          <h1 className="first-heading">Registrations Are Closed Now!</h1>
          <p className="first-para">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      )
    } else if (registrationStatus === 'REGISTERED') {
      output = (
        <div className="register-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="last-image"
          />
          <h1 className="first-para2">
            You have already registered for the event
          </h1>
        </div>
      )
    }

    return <div className="second">{output}</div>
  }
}
export default ActiveRegistartion
