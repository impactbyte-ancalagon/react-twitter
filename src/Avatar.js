import React, { Component } from "react"

import avatar from "./assets/avatar.jpg"

class Avatar extends Component {
  render() {
    return <img className="avatar" src={avatar} alt="Avatar" />
  }
}

export default Avatar
