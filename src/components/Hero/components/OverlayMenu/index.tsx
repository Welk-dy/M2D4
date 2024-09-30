import {FC} from "react";
import HandShake from "../../../../assets/handshake.png";
import './style.css';

const Index: FC = () => {
  return (
    <div className="overlay-menu">
      <img src={HandShake} alt="handshake" className="handshake"/>
      <span>Hi I’m Ayush</span>
    </div>
  );
}

export default Index;