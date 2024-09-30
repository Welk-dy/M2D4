import {FC} from "react";
import Arrow from "../../../assets/Arrow.png";

// Use object destructuring to get the properties of the project object
const Project: FC<Project> = ({ name, roles, link }) => {
  return (
    <div>
      <hr></hr>
      <div className="project-wrapper">
        <div className="project-details">
          <div className="project-name">{name}</div>
          <div className="project-roles">
            {roles.map((role, index) => (
              <>
                <span key={index}>{role}</span>
                {index < roles.length - 1 && <span> - </span>}
              </>
            ))}
          </div>
        </div>
        <div className="project-link">
          <a href={link} target="_blank" rel="noreferrer">
            <span class="dot"><img src={Arrow} alt="arrow" className="arrow" /></span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;