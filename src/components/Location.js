import React from "react";

import resume from "../static/resume.json";

const basic = resume.basics;
const Location = () => {
  return basic.map((info, i) => (
    <section class="content">
      <div class="row">
        <div class="content-cat">Location</div>
        <div class="content-text">
          {info.location.map(function (loc, i) {
            return (
              <>
                <ul>
                  <li>Address</li>
                  <li>{loc.address}</li>
                </ul>
                <ul>
                  <li>Postal Code &amp; City</li>
                  <li>
                    {loc.postalCode} {info.city}
                  </li>
                </ul>
                <ul>
                  <li>Region</li>
                  <li>{loc.region}</li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </section>
  ));
};

export default Location;
