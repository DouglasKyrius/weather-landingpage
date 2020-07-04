import React from 'react';
import bg from '../../img/bg-shape.svg';

import './Info.css'

function Info(props) {
  //props.tempSymbol
  //props.setTempSymbol
  let { tempSymbol, setTempSymbol } = props;
  return (
    <section>
      <img src={bg} alt="Background Shape" id="bg" />
      <h1>WEATHER<br/>ME <span>NOW</span></h1>
      <hr />

      <p>A minimal weather app design to brighten up your day.<br />Designed and developed by Douglas Eduardo @ Chronos Media Group.</p>

      <div className="bottom">
        <p>Your weather is currently showing in:</p>
        <div className="buttons">
          <div className="btn">
            { tempSymbol === 'C' 
              ? <button className="active">C</button> 
              : <button onClick={setTempSymbol}>C</button> 
            }
            <p>Celsius</p>
          </div>
          <div className="btn">
            { tempSymbol === 'F' 
              ? <button className="active">F</button> 
              : <button onClick={setTempSymbol}>F</button> 
            }
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;  