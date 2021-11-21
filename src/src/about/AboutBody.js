import React from "react";

import "../style.css";

export default function AboutBody() {
  return (
    <div className="container-fluid p-4" id="about-body">
      <p>
        I'm a Junior Developer at SeedSpark, which maintains a mix of legacy, in-house frameworks 
        based around C#, Visual Basic, JavaScript, and SQL, and modern frameworks such as Blazor
        for newer projects.
      </p>
      <br/>
      <p>
        Many of my personal projects have been created using JavaScript, React, Bootstrap,
        and PostgreSQL, however I am always looking to challenge myself and learn something
        new when I take on a new project.
      </p>
      <br/>
      <p>
        When I'm not programming, I tend to spend my free time with friends and family, woodworking, 
        or blacksmithing. I hope to one day integrate my crafts with programming and branch into
        robotics, using parts and pieces that I've engineered and constructed myself.
      </p>
    </div>
  );
}
