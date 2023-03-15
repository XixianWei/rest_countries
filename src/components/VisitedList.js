import React from 'react';
import './style.css';

const VisitedList = props => (
  <div>
    <h2>Visited Countries</h2>
    <ul className="visited-list">
      {props.visitedCountries.map(country => (
        <li key={country.name.common}>
          <img src={country.flags.svg} alt={country.name.common} />
          <span>{country.name.common}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default VisitedList;
