import './style.css';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function App() {
  return (
    <div className='parentCard'>
      <div className="mainCard">
        <div className="profileCard">
          <h2 className="cardTitle">Faisal Ahmed</h2>
          <h4 className="cardDesignation">Frontend Web Developer</h4>
        </div>
        <div className="contactCard">
          <div className="contactRight">
            <div className="location">
              <p>Dhaka</p>
              <p> <CiLocationOn className='icon' /> </p>
            </div>
            <div className="mobile">
              <p>+8801685477114</p>
              <p> <a href="http://wa.me/8801685477114" target="_blank" rel="noopener noreferrer"> <FaPhoneSquareAlt className='icon' /> </a> </p>
            </div>
            <div className="email">
              <p>web.faisal.bd@gmail.com</p>
              <p> <a href="mailto:web.faisal.bd@gmail.com"> <HiMail className='icon' /> </a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
