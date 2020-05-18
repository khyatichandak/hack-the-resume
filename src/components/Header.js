import React from "react";

import resume from "../static/resume.json";

const basic = resume.basics;
const Header = () => {
  return basic.map((info, i) => (
    <header>
      <div class="header-content">
        <div class="header-text">
          <p>{info.name}</p>
          <p class="subtitle">{info.label}</p>
        </div>
      </div>
    </header>
  ));
};

export default Header;
