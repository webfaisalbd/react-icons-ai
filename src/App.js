import './style.css'

function App() {
  return (
    <div className='parentCard'>
      <div className="mainCard">
        <div className="profileCard">
          <h2 className="cardTitle">Faisal Ahmed</h2>
          <h4 className="cardDesignation">Frontend Web Developer</h4>
        </div>
        <div className="contactCard">
          <div className="location">
            <p>Dhaka</p>
            <p>icon</p>
          </div>
          <div className="mobile">
            <p>+8801685477114</p>
            <p>icon</p>
          </div>
          <div className="email">
            <p>web.faisal.bd@gmail.com</p>
            <p>icon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
