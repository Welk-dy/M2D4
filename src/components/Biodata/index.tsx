import {FC} from "react";
import './styles.css';
import Ayush from "../../assets/CUPerson.png";

const Index: FC = () => {
  return (
    <div className="biodata">
      <img src={Ayush} alt="ayush" className="ayush" /> 
        <div className="contact-details">
            <div className="contact-text">Contact Details</div>
            <div className="contact-email">fernaldysaputra@gmail.com</div>
            <div className="contact-phone">+62 815-1949-3975</div>
        </div>
        <div className="sosmed">
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://x.com/">Twitter</a>
            <a href="https://webflow.com/">Webflow</a>
            <a href="https://www.figma.com/">Figma</a>
        </div>
      <div className="right">
        <div className="text">Let's build something cool together</div>
        <div className="form">
            <div className="subject">Name</div>
            <div className="fill"><hr>James Robert</hr></div>
            <div className="subject">Email</div>
            <div className="fill"><hr>ayush.barnwal@brightscout.com</hr></div>
            <div className="subject">Subject</div>
            <div className="fill"><hr>For web design work Enquire</hr></div>
            <div className="subject"><Message></div>
            <div className="fill"><hr>Type your Message</hr></div>
        </div>
        <div className="button">Submit</div>
      </div>
    </div>
  );
}

export default Index;