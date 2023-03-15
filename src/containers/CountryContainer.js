import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedList from "../components/VisitedList";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const markVisited = country => {
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <>
      <CountryList countries={countries} onVisited={markVisited} />
      <VisitedList visitedCountries={visitedCountries} />
    </>
  );
}

export default CountryContainer;
