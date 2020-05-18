import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

import Contact from "./components/Contact";
import Location from "./components/Location";

import Experience from "./components/Experience";

import Education from "./components/Education";
import Volunteer from "./components/Volunteer";
import Awards from "./components/Awards";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "classy",
    };
  }
  enableTheme = (name) => {
    this.setState({
      theme: name,
    });
  };
  render() {
    return (
      <Container>
        <button className="print btn btn-info" onClick={() => window.print()}>
          PRINT
        </button>
        &nbsp;
        <button
          onClick={() => this.enableTheme("classy")}
          className="btn btn-light"
        >
          Light
        </button>
        &nbsp;
        <button
          onClick={() => this.enableTheme("traditional")}
          className="btn btn-dark"
        >
          Dark
        </button>
        <article
          className="paper"
          style={{
            backgroundColor:
              this.state.theme === "classy" ? "#ffffff" : "lightgray",
            fontFamily: this.state.theme === "classy" ? "Open Sans" : "Arial",
          }}
        >
          <Header />

          <div className="content-wrapper">
            <Contact />
            <Location />
            <Experience />
            <Volunteer />
            <Education />
            <Awards />
            <section class="content">
              <div class="row">
                <div class="content-cat">Skills</div>
                <div class="content-text skills-listing">
                  <p>
                    <span class="name">
                      <strong>Web Development</strong>
                    </span>
                    <span>(Master):</span>
                    HTML, CSS, Javascript
                  </p>
                  <p>
                    <span class="name">
                      <strong>Compression</strong>
                    </span>
                    <span>(Master):</span>
                    Mpeg, MP4, GIF
                  </p>
                </div>
              </div>
            </section>
            <section class="content">
              <div class="row">
                <div class="content-cat">Languages</div>
                <div class="content-text">
                  <ul>
                    <li>English</li>
                    <li>Native speaker</li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="content profiles">
              <div class="row">
                <div class="content-cat">Profiles</div>
                <div class="content-text profiles-listing">
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://soundcloud.com/dandymusicnl"
                        target="_blank"
                      >
                        SoundCloud
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="content">
              <div class="row">
                <div class="content-cat">Interests</div>
                <div class="content-text skills-listing">
                  <p>
                    <span class="name">
                      <strong>Wildlife:</strong>
                    </span>
                    Ferrets, Unicorns
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </Container>
    );
  }
}

export default App;
