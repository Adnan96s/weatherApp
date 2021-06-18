import react, { useEffect, useState } from "react";
import TempAppcss from "../css/TempAppcss.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0b8611026ee9ee47581151ffa68c5291`;
      const response = await fetch(URL);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="info">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h3 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h3>
              <h1 className="temp">{city.temp} °C</h1>
              <h3 className="tempmin_max">
                min: {city.temp_min} °Cel max: {city.temp_max} °Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default TempApp;
