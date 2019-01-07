import React, { Component } from "react"

import avatar from "./assets/avatar.jpg"

class MediaThumbnail extends Component {
  render() {
    return <img className="media" src={avatar} alt="Avatar" />
  }
}

export default MediaThumbnail
