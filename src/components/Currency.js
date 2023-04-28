/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Currency(data) {
  const { currency, bg } = data;
  const {
    id, rank, name, symbol, priceUsd,
  } = currency;

  return (
    <Link to={`/${id}`}>
      <div role="presentation" className={`currency-box ${bg}`} id={id}>
        <h4>
          #
          {rank}
        </h4>
        <h2>{symbol}</h2>
        <h3>{name}</h3>
        <p>{priceUsd}</p>
      </div>
    </Link>
  );
}

Currency.defaultProps = {
  rank: '',
  symbol: '',
  name: '',
  price: '',
};

Currency.prop = {
  rank: propTypes.number,
  symbol: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
};
