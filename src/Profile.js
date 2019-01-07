import React, { Component } from "react"

import Avatar from "./Avatar"
import Name from "./Name"
import Bio from "./Bio"
import BioDetails from "./BioDetails"
import Media from "./Media"

class Profile extends Component {
  render() {
    return (
      <aside className="profile">
        <Avatar />
        <Name />
        <Bio />
        <BioDetails />
        <Media />
      </aside>
    )
  }
}

export default Profile
