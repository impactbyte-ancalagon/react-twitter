import React, { Component } from "react"

import MediaThumbnail from "./MediaThumbnail"

const thumbnails = new Array(6).fill(0) // creating [0, 0, 0, 0, 0, 0]

class Media extends Component {
  render() {
    return (
      <section className="media">
        <p className="media-title">
          <i>O</i>{" "}
          <a href="https://twitter.com/mhaidarh">20 Photos and Videos</a>
        </p>
        {thumbnails.map((item, index) => {
          return <MediaThumbnail key={index} />
        })}
      </section>
    )
  }
}

export default Media
