import {FC} from "react";

// Use object destructuring to get the properties of the project object
const Testi: FC<Testi> = ({ img, name , roles }) => {
  return (
    <div className="testi-details">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
    <div className="testi-wrapper">
      <div className="testi-img"><img src={img}/></div>
      <div className="testi-person">
        <div className="testi-name">{name}</div>
        <div className="testi-roles">{roles}</div>
        </div>
    </div>
    </div>
  );
}
export default Testi;