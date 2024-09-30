import {FC} from "react";
import './styles.css';
import Marquee from "react-fast-marquee";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import Slide4 from "../../assets/slide4.jpg";
import Slide5 from "../../assets/slide5.jpg";
import Slide6 from "../../assets/slide6.jpg";
import Slide7 from "../../assets/slide7.jpg";
import Slide8 from "../../assets/slide8.jpg";


const Index: FC = () => {
  return (
    <>
    <div className="slider1">
      <Marquee direction="right" speed={300} >
        <div><img src={Slide1} className="slide1" /></div>
        <div><img src={Slide2} className="slide2" /></div>
        <div><img src={Slide3} className="slide3" /></div>
        <div><img src={Slide4} className="slide4" /></div>
      </Marquee>
    </div>
    <div className="slider2">
      <Marquee direction="left" speed={300} >
        <div><img src={Slide5} className="slide5" /></div>
        <div><img src={Slide6} className="slide6" /></div>
        <div><img src={Slide7} className="slide7" /></div>
        <div><img src={Slide8} className="slide8" /></div>
      </Marquee>
    </div>
    </>
  );
}

export default Index;