import {FC} from "react";
import './styles.css';
import Marquee from "react-fast-marquee";
import Rectangle from "../../../../assets/Rectangle.png";

const Index: FC = () => {
  return (
    <div className="marquee">
      <Marquee speed={200} >
      <div>Webflow Developer</div>
      <div><img src={Rectangle} className="rectangle" /></div>
      <div>UI/UX Designer </div>
      <div><img src={Rectangle} className="rectangle" /></div>
      <div>Web Designer </div>
      <div><img src={Rectangle} className="rectangle" /></div>
      </Marquee>
    </div>
  );
}

export default Index;