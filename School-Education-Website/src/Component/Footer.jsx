import logo from "../images/Logo.png";
import message from "../images/Icon message.png";
import phone from "../images/Icon phone.png";
import location from "../images/icon location.png";
import './FooterStyle.css';
export default function Footer(){
    return (
        <div className="footerContainer">
             <div className="footerLogo">
              <img src={logo} alt="logo" />
              <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
              </p>
              <div>
              <img src={message} alt="message icon" />
              <a>hello@littlelearners.com</a>
              </div>
              <div>
              <img src={phone} alt="phone icon" />
              <a>+91 91813 23 2309</a>
              </div>
              <div>
              <img src={location} alt="location icon" />
              <a>Somewhere in the World</a>
              </div>
            </div>
          <div  className="list">
            <div className="listChild">
            <ul>
            <li><b>Home</b></li>
            <li>Features</li>
            <li>Our Testimonials</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li><b>About Us</b></li>
            <li>Our Mission</li>
            <li>Our Vission</li>
            <li>History</li>
            <li>Teachers</li>
          </ul>
          </div>
          <div className="listChild">
          <ul>
            <li><b>Academics</b></li>
            <li>Special Features</li>
            <li>Gallery</li>
          </ul>
          <ul>
            <li><b>Contact Us</b></li>
            <li>Information</li>
            <li>Map & Direction</li>
          </ul>
          </div>
          </div>
        </div>
    )
}