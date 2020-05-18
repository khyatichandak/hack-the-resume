import React from "react";

import resume from "../static/resume.json";

const Basics = () => {
  return resume.basics.map((info, i) => (
    <div key={i}>
      <div>
        <a href={info.website}>
          <img src={info.image} alt={info.name} />
        </a>
        <div>
          <div>
            <a href={info.website}>{info.website}</a>
          </div>
          <div key={i}>
            <h5>{info.label}</h5>
            <span>{info.summary}</span>
            <span>{info.location.city}</span>
            <p>{info.location.countryCode}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Basics;
