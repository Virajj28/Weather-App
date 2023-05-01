// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updataPlaceData = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=625f7e67e582485b83f33852211108&q=${place}`
      )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPlaceData(data);
    });
  };
  return (
    <div className="App">
      <h1>How's It!</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }} 
              />
              <button className="btn btn-primary" onClick={updataPlaceData}>
                Submit</button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <h4>{placeData.current.condition.text}</h4>
                  <img src={placeData.current.condition.icon} alt="" />
                  <h3>{placeData.location.name}</h3>
                  <div className="lastuptime">{placeData.current.last_updated}</div>
                  <h3>{placeData.current.temp_c}° C</h3>
                  <h5>{placeData.location.region}</h5>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="title">Wind now
                          <div className="data">{placeData.current.wind_kph}km</div>
                        </div>
                      </div>
                      <div className="col">
                      <div className="title">Humidity
                          <div className="data">{placeData.current.humidity}%</div>
                        </div>
                      </div>
                      <div className="col">
                      <div className="title">Precipitation
                          <div className="data">{placeData.current.precip_in}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (<h3>Sorry! Place Not Found.</h3>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
