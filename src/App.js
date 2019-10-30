import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";

import Cards from "./components/Cards";
import BoBar from "./components/bar";
import Footer from "./components/Footer";
import Countdown from "./components/countdown";



const particleOpts = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 789
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0.5,
        color: "#000000"
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: "789.1850086415761",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 1,
      width: 1.25
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 170,
        line_linked: {
          opacity: 0.9
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <BoBar />

        <div
          className="particlesjs col-xs-12 img-fluid"
          data-aos="slide-down"
          data-aos-duration="1300"
        >
          <Particles params={particleOpts} />
        </div>

        <div>
          <Countdown date={`${year}-11-08T00:00:00`} />
        </div>

        <div className="cardfx" id="ecard">
          <br />
          <br />
          <h2 className="text-left otext">
            <b>Events</b>
          </h2>
          <h4 className="text-left otext">
            Participate, Compete, Learn and Win!
          </h4>
          <Cards />
        </div>

        <div id="abt-us">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
