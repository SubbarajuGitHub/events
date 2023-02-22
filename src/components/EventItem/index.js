import {Component} from 'react'

import './index.css'

class EventItem extends Component {
  render() {
    const {Item, checkRegistartion} = this.props
    const {imageUrl, name, location, id} = Item
    const letsDo = () => {
      checkRegistartion(id)
    }
    return (
      <li className="card-item">
        <button type="button">
          <img src={imageUrl} className="images" onClick={letsDo} alt="event" />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    )
  }
}
export default EventItem
