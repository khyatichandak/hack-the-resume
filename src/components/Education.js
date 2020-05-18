import React from "react";
import resume from "../static/resume.json";

const basic = resume.education;
const Education = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat big-text">
          Education
          <p>
            {info.startDate} till {info.endDate}
          </p>
        </div>
        <div class="content-text work-listing education-listing">
          <p class="heading" style={{ marginTop: 2.35 + "em" }}>
            {info.institution}
          </p>
          <p class="highlight">
            {info.studyType}:
            <i>
              {info.area} ({info.gpa})
            </i>
          </p>
        </div>
      </div>
    </section>
  ));
};

export default Education;
