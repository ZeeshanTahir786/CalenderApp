import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import { useAxiosInterceptors } from "../axios";
import Holiday from "./Holiday";

const Calender = () => {
  useAxiosInterceptors();
  const [country, setCountry] = useState("");

  const [event, setEvent] = useState([]);
  const options = useMemo(() => countryList().getData(), []);

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  useEffect(() => {
    async function Holiday() {
      const data = await axios.get("/holidays", {
        params: {
          api_key: "308db284a0eff5561fe7dfc08429a6e25b19dd84",
          country: country.value ? country.value : "PK",
          year: "2021",
        },
      });
      setEvent(data.data.response.holidays);
      return data;
    }
    Holiday();
  }, [country]);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ flexDirection: "row", justifyContent: "center" }}>
        <h3 style={{ margin: 5 }}>Select Country</h3>
        <div style={{ margin: 5 }}>
          <Select
            options={options}
            value={country}
            onChange={handleCountryChange}
          />
        </div>
      </div>
      <Holiday event={event} />
    </div>
  );
};
export default Calender;
