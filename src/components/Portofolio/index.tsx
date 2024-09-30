import {FC} from "react";
import './styles.css';
import {ProjectList} from "../../constants/projectList.ts";
import Project from "./components/Project";

const Portofolio: FC = () => {
  return (
    <div className="portofolio">
      <div className="left">
        Recent Work
      </div>
      <div className="right">
        {/*Loop each of the project item so it become its own component*/}
        {ProjectList.map((project, index) => (
          // Object spreading
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portofolio;