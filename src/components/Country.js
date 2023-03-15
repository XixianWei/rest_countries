import React from 'react';

const Country = props => {
  const handleClick = () => {
    props.onVisited(props.country);
  };

  return (
    <>
    <li>
      <img src={props.country.flags.svg} alt={props.country.name.common} />
      <span>{props.country.name.common}</span>
      <button onClick={handleClick}>Visited</button>
    </li>
    </>
  );
};

export default Country;
