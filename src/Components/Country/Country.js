import React from 'react';

import sunIcon from '../../img/sun-icon.svg';
import snowIcon from '../../img/snow-icon.svg';
import warm from '../../img/pic-1.jpg';
import cold from '../../img/pic-2.jpg';

import './Country.css';

const Country = ({defaultCities, tempSymbol, ...props}) => {
  console.log(defaultCities);
  console.log(props.city);
  
  let currentTemp = 0;

  if (props.city.main) {
    tempSymbol === 'C' 
      ? currentTemp = props.city.main.temp 
      : currentTemp = (props.city.main.temp * 9/5) + 32;
  } else if (defaultCities) {
    tempSymbol === 'C' 
      ? currentTemp = defaultCities.main.temp 
      : currentTemp = (defaultCities.main.temp * 9/5) + 32;
  }
  
  return ( 
    <section>
      { props.city.main ?
          <React.Fragment>
            <div className="floater">
              <div className="icon-temp">
                {props.city.main.temp >= 16 ?
                  <img src={sunIcon} alt="Sun icon" />
                  :
                  <img src={snowIcon} alt="Cold icon" />
                }
                <p id="temp"> {Math.round(currentTemp)}° </p>
              </div>
              <p>{props.city.weather[0].main.toUpperCase()}</p>
            </div>
            {props.city.main.temp >= 16 ?
              <img src={warm} alt="Warm img" class="country-img" />
              :
              <img src={cold} alt="Cold img" class="country-img" />
            }
            <div className="country">
              <div>
                <input 
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                  onChange={e => props.setQuery(e.target.value)}
                  value={props.query}
                  onKeyPress={props.search}
                />
              </div>
              <div>
                <p>{props.city.name}</p>
                <p>{props.city.sys.country}</p>
              </div>
            </div>
          </React.Fragment>
        :
          defaultCities ?
            <React.Fragment>
              <div className="floater">
                <div className="icon-temp">
                  {defaultCities.main.temp >= 16 ?
                    <img src={sunIcon} alt="Sun icon" />
                    :
                    <img src={snowIcon} alt="Cold icon" />
                  }
                  <p id="temp"> {Math.round(currentTemp)}° </p>
                </div>
                <p>{defaultCities.weather[0].main.toUpperCase()}</p>
              </div>
              {defaultCities.main.temp >= 16 ?
                <img src={warm} alt="Warm img" class="country-img" />
                :
                <img src={cold} alt="Cold img" class="country-img" />
              }
              <div className="country">
                <div>
                  <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => props.setQuery(e.target.value)}
                    value={props.query}
                    onKeyPress={props.search}
                  />
                </div>
                <div>
                  <p>{defaultCities.name}</p>
                  <p>{defaultCities.sys.country}</p>
                </div>
              </div>
            </React.Fragment>
          :
          ''
      }
    </section>
  );
}

export default Country;