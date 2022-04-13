import React from "react";
import "./App.css";

import { BsGithub, BsDiscord, BsReddit } from "react-icons/bs";

// Import kofi widget
const KofiButton = require("kofi-button");

function App() {
  return (
    <div className="App">
      <h1 className="Header">rPlace 2022</h1>
      <h3 className="Header-child"></h3>
      <div className="About-us">
        <p className="About-us-paragraph">
          We are a team developing a non-profit, user-friendly interface for the
          r/place dataset visualization and imagery generation.
          <br />
          <br />
          This website is still a work in progress, consider joining the Discord
          or the Reddit for updates.
        </p>
      </div>
      <a href="https://github.com/r-ganization">r-ganization</a>
      <br />
      <KofiButton
        color="#15A2DF"
        title="Support the team"
        kofiID="rganization"
      />
      <div className="footer-link-icons">
        <a href="https://discord.gg/rcpZbN5f">
          <BsDiscord size={40} className="footer-icon" title="Discord" />
        </a>
        <a href="https://github.com/r-ganization">
          <BsGithub size={40} className="footer-icon" title="Github" />
        </a>
        <a href="https://www.reddit.com/r/ganization/">
          <BsReddit size={40} className="footer-icon" title="Reddit" />
        </a>
      </div>
    </div>
  );
}

export default App;
