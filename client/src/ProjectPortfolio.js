import React from "react";
import { Link } from "react-router-dom";

function ProjectPortfolio({
  projImgName,
  projLink,
  projClassName,
  projDetails,
}) {
  return (
    <div className={projClassName}>
      <img className="proj-img" src={projImgName} alt=""></img>
      <Link to={projLink}>
        <div className="block-overlay">
          <div className="block-overlay-text">{projDetails}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectPortfolio;
