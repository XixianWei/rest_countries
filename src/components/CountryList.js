import React from 'react';
import Country from './Country';
import './style.css';

const CountryList = props => (
  <>
    <h2>Countries</h2>
    <ul className="country-list">
      {props.countries.map(country => (
        <Country
          key={country.name.common}
          country={country}
          onVisited={props.onVisited}
        />
      ))}
    </ul>
  </>
);

export default CountryList;
