import {FC} from "react";
import './styles.css';
import Footer from "../../assets/Footer.png";

const Index: FC = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="top-text">
          <div className="top-text1">Have something in mind?</div>
          <div className="top-text2">
            <img src={Footer} alt="footer-img" className="footer-img" /> 
            let’s build it together.
          </div>
        </div>
        <div className="button-footer">
          <a href="/contact-us">Get in touch</a>
        </div>
      </div>
      <div className="bottom">
        <div className="build-footer">
          Build with 💖 by Brightscout & Ayush
        </div>
        <div className="footer-list">
          <a href="https://www.linkedin.com/">Linkedin</a>
          <a href="https://x.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://webflow.com/">Webflow</a>
        </div>
      </div>
    </footer>
  );
}

export default Index;