import React from "react";

import resume from "../static/resume.json";
import Card from "react-bootstrap/Card";

const Skills = () => {
  return (
    <Card>
      <Card.Body>
        <h2>SKILLS</h2>
        {resume.skills.map((skill, i) => (
          <div key={i}>
            <div>
              <h3>
                {skill.name} - {skill.level}
              </h3>
              {skill.keywords.map(function (keyword, i) {
                return (
                  <div key={i}>
                    <p>{keyword}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Skills;
