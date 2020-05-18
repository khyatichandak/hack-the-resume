import React from "react";

import resume from "../static/resume.json";

const basic = resume.work;
const Experience = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat big-text">
          Work Experience
          <p>
            {info.startDate} till {info.endDate}
          </p>
        </div>
        <div class="content-text work-listing education-listing">
          <p style={{ marginTop: 2.4 + "em" }}>
            <strong>{info.position}</strong> at{" "}
            <strong>
              <a href={info.website}>{info.company}</a>
            </strong>
          </p>
          {/* <p>
            Pied Piper is a multi-platform technology based on a proprietary
            universal compression algorithm that has consistently fielded high
            Weisman Scores™ that are not merely competitive, but approach the
            theoretical limit of lossless compression.
          </p> */}
          <p class="highlight">{info.summary}</p>
          {/* <p class="highlight">Successfully won Techcrunch Disrupt</p>
          <p class="highlight">
            Optimized an algorithm that holds the current world record for
            Weisman Scores
          </p> */}
        </div>
      </div>
    </section>
  ));
};

export default Experience;
