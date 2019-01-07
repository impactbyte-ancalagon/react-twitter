import React, { Component } from "react"
import "./App.css"

import avatar from "./assets/avatar.jpg"

class App extends Component {
  render() {
    return (
      <main className="container">
        <aside className="profile">
          <img className="avatar" src={avatar} alt="Avatar" />
          <section className="name">
            <h2 className="full-name">M Haidar Hanif</h2>
            <span className="username">@mhaidarh</span>
          </section>
          <section className="bio">
            Educator and tech consultant, building and teaching software at{" "}
            <a href="https://twitter.com/impactbyte">@impactbyte</a>
          </section>
          <section>
            <i>O</i> Asia, Earth
          </section>
          <section>
            <i>O</i> <a href="https://mhaidarhanif.com">mhaidarhanif.com</a>
          </section>
          <section>
            <i>O</i> Joined May 2011
          </section>
          <section>
            <i>O</i> Born on May 23, 1993
          </section>
          <section className="media">
            <p className="media-title">
              <i>O</i>{" "}
              <a href="https://twitter.com/mhaidarh">20 Photos and Videos</a>
            </p>
            <img src={avatar} alt="Media" />
            <img src={avatar} alt="Media" />
            <img src={avatar} alt="Media" />
            <img src={avatar} alt="Media" />
            <img src={avatar} alt="Media" />
            <img src={avatar} alt="Media" />
          </section>
        </aside>
      </main>
    )
  }
}

export default App
