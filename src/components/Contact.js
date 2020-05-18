import React from "react";

import resume from "../static/resume.json";

const basic = resume.basics;
const Contact = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat">Contact</div>
        <div class="content-text">
          <ul>
            <li>Website</li>
            <li>{info.website}</li>
          </ul>
          <ul>
            <li>Email</li>
            <li>{info.email}</li>
          </ul>
          <ul>
            <li>Phone</li>
            <li>{info.phone}</li>
          </ul>
        </div>
      </div>
    </section>
  ));
};

export default Contact;
