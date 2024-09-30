import {FC} from "react";
import './styles.css';
import {TestimonialsList} from "../../constants/testimonialsList.ts";
import Testi from "./components/Testi";

const Testimonials: FC = () => {
  return (
    <div className="testimonials">
      <div className="testi-left">
        Testimonials
      </div>
      <div className="testi-right">
        {/*Loop each of the project item so it become its own component*/}
        {TestimonialsList.map((testi, index) => (
          // Object spreading
          <Testi key={index} {...testi} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;