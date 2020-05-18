import React from "react";
import resume from "../static/resume.json";

const basic = resume.awards;
const Education = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat big-text">
          Awards
          <p>{info.title}</p>
          <p style={{ marginTop: 0.25 + "em" }}>{info.date}</p>
        </div>
        <div class="content-text work-listing">
          <strong>
            <p class="heading">{info.awarder}</p>
          </strong>
          <p class="highlight">{info.summary}</p>
        </div>
      </div>
    </section>
  ));
};

export default Education;
