import React from "react";

import resume from "../static/resume.json";

const basic = resume.volunteer;
const Volunteer = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat big-text">
          {info.organization}
          <p>
            {info.startDate} till {info.endDate}
          </p>
        </div>
        <div class="content-text work-listing">
          <p>{info.summary}</p>
          <p class="highlight">{info.highlights}</p>
        </div>
      </div>
    </section>
  ));
};

export default Volunteer;
